/**
 * Build-time only: regenerate with `node scripts/generate-app-qrs.mjs`.
 * Requires the repository's qrcode and typescript dev dependencies.
 * No remote QR service, URL shortener, client-side generator, or analytics.
 */
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import QRCode from 'qrcode';
import ts from 'typescript';

const registrySource = await readFile(new URL('../lib/apps/registry.ts', import.meta.url), 'utf8');
const compiled = ts.transpile(registrySource, {
  module: ts.ModuleKind.ESNext,
  target: ts.ScriptTarget.ES2022,
});
const { showcaseApps, getShowcaseQrPath } = await import(
  `data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`
);

const quietZone = 4;
const outputDirectory = new URL('../public/apps/qr/', import.meta.url);
const checkOnly = process.argv.includes('--check');
if (!checkOnly) await mkdir(outputDirectory, { recursive: true });

function escapeText(value) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

export function createQrSvg(app) {
  const qr = QRCode.create(app.url, { errorCorrectionLevel: 'Q' });
  const dimension = qr.modules.size + quietZone * 2;
  const modules = [];

  for (let row = 0; row < qr.modules.size; row += 1) {
    for (let column = 0; column < qr.modules.size; column += 1) {
      if (qr.modules.get(row, column)) {
        modules.push(`M${column + quietZone},${row + quietZone}h1v1h-1z`);
      }
    }
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${dimension} ${dimension}" width="${dimension}" height="${dimension}" role="img" aria-labelledby="qr-title" shape-rendering="crispEdges">\n<title id="qr-title">Open ${escapeText(app.name)}</title>\n<rect width="${dimension}" height="${dimension}" fill="#fff"/>\n<path fill="#000" d="${modules.join('')}"/>\n</svg>\n`;
}

for (const app of showcaseApps) {
  const file = new URL(`${app.id}.svg`, outputDirectory);
  const svg = createQrSvg(app);
  if (checkOnly) {
    const saved = await readFile(file, 'utf8');
    if (saved !== svg) {
      throw new Error(`${getShowcaseQrPath(app)} is stale. Run node scripts/generate-app-qrs.mjs.`);
    }
  } else {
    await writeFile(file, svg, 'utf8');
  }
  process.stdout.write(`${checkOnly ? 'Verified' : 'Generated'} ${fileURLToPath(file)}\n`);
}

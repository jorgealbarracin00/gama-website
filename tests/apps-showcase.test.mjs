import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import jsQR from 'jsqr';
import ts from 'typescript';

const source = readFileSync(new URL('../lib/apps/registry.ts', import.meta.url), 'utf8');
const compiled = ts.transpile(source, {
  module: ts.ModuleKind.ESNext,
  target: ts.ScriptTarget.ES2022,
});
const { showcaseApps, visibleShowcaseApps, getShowcaseActionLabel, getShowcaseQrPath } = await import(
  `data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`
);

// Independent acceptance list: changing a production URL must also be reviewed here.
const approvedDestinations = [
  ['dunnymaster', 'https://apps.apple.com/au/app/dunnymaster/id6819902112'],
  ['tara', 'https://apps.apple.com/au/app/tara-timed-intake-assistant/id6819933946'],
  ['grocerymaster', 'https://apps.apple.com/au/app/grocerymaster/id6767196131'],
  ['memoirechoes', 'https://apps.apple.com/au/app/memoirechoes/id6792436890'],
  ['cashcast', 'https://cashcast.gamadynamics.com.au'],
  ['coco', 'https://cocothellama.com'],
];

function qrPixels(svg, scale = 8) {
  const [, size] = svg.match(/viewBox="0 0 (\d+) \d+"/) ?? [];
  assert.ok(size, 'SVG must have a square viewBox');
  const dimension = Number(size);
  const coordinates = [...svg.matchAll(/M(\d+),(\d+)h1v1h-1z/g)].map(match => [Number(match[1]), Number(match[2])]);
  assert.ok(coordinates.length > 0, 'SVG must contain genuine QR modules');
  const width = dimension * scale;
  const pixels = new Uint8ClampedArray(width * width * 4).fill(255);

  for (const [x, y] of coordinates) {
    // Four full empty modules are the QR quiet zone on every side.
    assert.ok(x >= 4 && y >= 4 && x < dimension - 4 && y < dimension - 4, 'QR quiet zone must remain clear');
    for (let dy = 0; dy < scale; dy += 1) {
      for (let dx = 0; dx < scale; dx += 1) {
        const offset = ((y * scale + dy) * width + x * scale + dx) * 4;
        pixels[offset] = 0;
        pixels[offset + 1] = 0;
        pixels[offset + 2] = 0;
      }
    }
  }

  return { pixels, width, dimension };
}

test('only the six approved public apps appear, in the requested order', () => {
  assert.deepEqual(showcaseApps.map(app => [app.id, app.url]), approvedDestinations);
  assert.deepEqual(visibleShowcaseApps.map(app => [app.id, app.url]), approvedDestinations);
  assert.deepEqual(visibleShowcaseApps.map(app => app.order), [1, 2, 3, 4, 5, 6]);
  assert.equal(new Set(showcaseApps.map(app => app.id)).size, 6);
  assert.ok(visibleShowcaseApps.every(app => app.visible));
  assert.equal(visibleShowcaseApps.filter(app => app.platform === 'ios').length, 4);
  assert.equal(visibleShowcaseApps.filter(app => app.platform === 'web').length, 2);
  assert.ok(!source.toLowerCase().includes('timescope'), 'Unreleased products do not belong in the public showcase registry');
});

test('every action is a direct approved HTTPS destination with the required label', () => {
  for (const app of visibleShowcaseApps) {
    const destination = new URL(app.url);
    assert.equal(destination.protocol, 'https:');
    assert.equal(destination.username, '');
    assert.equal(destination.password, '');
    assert.equal(destination.search, '');
    assert.equal(destination.hash, '');
    assert.equal(getShowcaseActionLabel(app), app.platform === 'ios' ? 'Download on the App Store' : 'Launch Web App');
    assert.match(getShowcaseQrPath(app), /^\/apps\/qr\/[a-z]+\.svg$/);
  }
});

test('the six generated QR files exactly match the current central registry', () => {
  execFileSync(process.execPath, ['scripts/generate-app-qrs.mjs', '--check'], {
    cwd: new URL('..', import.meta.url),
    stdio: 'pipe',
  });
});

for (const [id, destination] of approvedDestinations) {
  test(`${id}: independent decoder scans the actual SVG modules to the exact approved URL`, () => {
    const svg = readFileSync(new URL(`../public/apps/qr/${id}.svg`, import.meta.url), 'utf8');
    assert.match(svg, /fill="#fff"/);
    assert.match(svg, /fill="#000"/);
    assert.match(svg, /shape-rendering="crispEdges"/);
    const { pixels, width, dimension } = qrPixels(svg);
    assert.ok(dimension >= 29, 'QR includes a complete symbol and quiet zone');
    const decoded = jsQR(pixels, width, width, { inversionAttempts: 'dontInvert' });
    assert.ok(decoded, 'QR should scan using an independent QR decoder');
    assert.equal(decoded.data, destination);
  });
}

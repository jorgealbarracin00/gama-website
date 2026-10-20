import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { visibleShowcaseApps } from '@/lib/apps/registry';

export const alt = 'Explore Our Apps — six colourful worlds from GAMA Dynamics';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const dynamic = 'force-static';

export default async function ShowcaseSharingImage() {
  const scenes = await Promise.all(visibleShowcaseApps.map(async app => ({
    name: app.name,
    src: `data:image/jpeg;base64,${(await sharp(await readFile(path.join(process.cwd(), 'public', app.artwork.mobileSrc ?? app.artwork.src))).jpeg({ quality: 85 }).toBuffer()).toString('base64')}`,
  })));

  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '40px 32px 30px', background: 'linear-gradient(135deg, #101a3d, #080e22 65%, #23152e)', color: '#f6f7ff' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22 }}>
        <div style={{ display: 'flex', fontSize: 18, letterSpacing: 4 }}>GAMA DYNAMICS</div>
        <div style={{ display: 'flex', fontSize: 18, color: '#b9c9ea' }}>Different ideas. A common purpose.</div>
      </div>
      <div style={{ display: 'flex', fontSize: 77, fontWeight: 700, letterSpacing: -4, marginBottom: 28 }}>Explore Our <span style={{ color: '#b8b8ff', marginLeft: 18 }}>Apps</span></div>
      <div style={{ display: 'flex', gap: 12, flex: 1 }}>
        {scenes.map(scene => (
          <div key={scene.name} style={{ display: 'flex', position: 'relative', width: 179, height: 315, overflow: 'hidden', borderRadius: 18 }}>
            {/* ImageResponse renders this artwork into the share image at build time. */}
            <img src={scene.src} alt="" width={179} height={315} style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', display: 'flex', bottom: 0, width: '100%', padding: '21px 8px 14px', color: 'white', background: 'linear-gradient(transparent, #080e22)', fontSize: scene.name.length > 12 ? 16 : 20, justifyContent: 'center', fontWeight: 700 }}>{scene.name}</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', color: '#b9c9ea', fontSize: 18, marginTop: 23 }}>Practical tools, creative experiences and useful apps for everyday life.</div>
    </div>,
    size,
  );
}

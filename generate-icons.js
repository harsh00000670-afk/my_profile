import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function generateIcons() {
  const logoSvg = fs.readFileSync(path.join(process.cwd(), 'public/logo.svg'));
  const iconSvg = fs.readFileSync(path.join(process.cwd(), 'public/icon.svg'));

  console.log('Generating PWA & Social Share Assets...');

  // 1. logo.png (512x512)
  await sharp(logoSvg)
    .resize(512, 512)
    .png()
    .toFile(path.join(process.cwd(), 'public/logo.png'));

  // 2. pwa-192x192.png
  await sharp(logoSvg)
    .resize(192, 192)
    .png()
    .toFile(path.join(process.cwd(), 'public/pwa-192x192.png'));

  // 3. pwa-512x512.png
  await sharp(logoSvg)
    .resize(512, 512)
    .png()
    .toFile(path.join(process.cwd(), 'public/pwa-512x512.png'));

  // 4. pwa-maskable-512x512.png (padded for safe zone)
  await sharp(logoSvg)
    .resize(410, 410)
    .extend({
      top: 51,
      bottom: 51,
      left: 51,
      right: 51,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toFile(path.join(process.cwd(), 'public/pwa-maskable-512x512.png'));

  // 5. apple-touch-icon.png (180x180)
  await sharp(logoSvg)
    .resize(180, 180)
    .png()
    .toFile(path.join(process.cwd(), 'public/apple-touch-icon.png'));

  // 6. favicon.png (64x64)
  await sharp(logoSvg)
    .resize(64, 64)
    .png()
    .toFile(path.join(process.cwd(), 'public/favicon.png'));

  // 7. og-image.png (1200x630 OpenGraph share banner)
  const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
    <rect width="1200" height="630" fill="#09090b"/>
    <!-- Subtle Background Grid -->
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#27272a" stroke-width="1"/>
      </pattern>
    </defs>
    <rect width="1200" height="630" fill="url(#grid)" opacity="0.3"/>
    
    <!-- HV Monogram Icon Card -->
    <g transform="translate(100, 165)">
      <rect width="300" height="300" rx="48" fill="#ffffff" />
      <g fill="#18181b" transform="translate(-106, -106) scale(0.6)">
        <path d="M 116 160 L 146 160 L 146 352 L 116 352 Z" />
        <path d="M 210 160 L 240 160 L 240 352 L 210 352 Z" />
        <path d="M 146 256 L 164 238 L 240 238 L 240 274 L 222 292 L 146 292 Z" />
        <path d="M 252 160 L 288 160 L 328 304 L 314 352 Z" />
        <path d="M 314 352 L 328 304 L 396 160 L 432 160 L 328 376 Z" />
      </g>
    </g>

    <!-- Shareable Meta Typography -->
    <text x="450" y="270" font-family="sans-serif" font-weight="800" font-size="48" fill="#ffffff" letter-spacing="-1">HARSH VISHWAKARMA</text>
    <text x="450" y="325" font-family="monospace" font-weight="600" font-size="22" fill="#a1a1aa" letter-spacing="2">FRONTEND &amp; LANDING PAGE DEVELOPER</text>
    <text x="450" y="380" font-family="sans-serif" font-weight="400" font-size="20" fill="#71717a">High-Converting Landing Pages · UI/UX · Core Backend Logic</text>
    
    <!-- Badge -->
    <rect x="450" y="420" width="220" height="40" rx="20" fill="#18181b" stroke="#3f3f46" stroke-width="1"/>
    <circle cx="475" cy="440" r="5" fill="#10b981"/>
    <text x="495" y="446" font-family="monospace" font-weight="600" font-size="14" fill="#34d399">HV // QUICKSOLVE</text>
  </svg>`;

  await sharp(Buffer.from(ogSvg))
    .png()
    .toFile(path.join(process.cwd(), 'public/og-image.png'));

  console.log('Successfully generated all PWA & Shareable icons!');
}

generateIcons().catch(console.error);

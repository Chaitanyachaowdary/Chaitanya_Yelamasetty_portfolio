import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0b1120"/><stop offset="1" stop-color="#161e2e"/>
    </linearGradient>
    <linearGradient id="t" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#38bdf8"/><stop offset="1" stop-color="#818cf8"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="112" fill="url(#bg)"/>
  <text x="50%" y="56%" font-family="Inter, Arial, sans-serif" font-size="230" font-weight="800" fill="url(#t)" text-anchor="middle" dominant-baseline="middle" letter-spacing="-6">CY</text>
</svg>`;

const buf = Buffer.from(svg);
await sharp(buf).resize(192, 192).png().toFile('public/pwa-192.png');
await sharp(buf).resize(512, 512).png().toFile('public/pwa-512.png');
await sharp(buf).resize(512, 512).png().toFile('public/pwa-maskable-512.png');
console.log('PWA icons generated');

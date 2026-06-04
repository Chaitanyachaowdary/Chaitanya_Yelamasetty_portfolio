import sharp from 'sharp';
import { readFileSync, statSync } from 'fs';
import { join } from 'path';

const pub = new URL('../public/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');

const kb = (p) => Math.round(statSync(p).size / 1024);

// Project screenshots → WebP, max 1200px wide (retina for ~600px cards)
const toWebp = ['cubic.png', 'chatgpt-preview.png', 'health.png', 'Design.png', 'easyshop.png', 'whatsappclone.jpg', 'veltore.jpg'];
for (const f of toWebp) {
  const src = join(pub, f);
  const out = join(pub, f.replace(/\.(png|jpe?g)$/i, '.webp'));
  const before = kb(src);
  await sharp(src).resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 80 }).toFile(out);
  console.log(`${f} (${before}KB) -> ${f.replace(/\.(png|jpe?g)$/i, '.webp')} (${kb(out)}KB)`);
}

// About photo → WebP
{
  const before = kb(join(pub, 'pic.jpg'));
  await sharp(join(pub, 'pic.jpg')).resize({ width: 900, withoutEnlargement: true }).webp({ quality: 82 }).toFile(join(pub, 'pic.webp'));
  console.log(`pic.jpg (${before}KB) -> pic.webp (${kb(join(pub, 'pic.webp'))}KB)`);
}

// Favicon → small 96px PNG (was 326KB)
{
  const before = kb(join(pub, 'cy-favicon.png'));
  await sharp(join(pub, 'cy-favicon.png')).resize(96, 96, { fit: 'cover' }).png({ quality: 90, compressionLevel: 9 }).toFile(join(pub, 'cy-favicon-96.png'));
  console.log(`cy-favicon.png (${before}KB) -> cy-favicon-96.png (${kb(join(pub, 'cy-favicon-96.png'))}KB)`);
}

console.log('Done.');

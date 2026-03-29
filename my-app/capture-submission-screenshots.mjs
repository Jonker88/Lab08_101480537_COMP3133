import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'submission-screenshots');
mkdirSync(outDir, { recursive: true });

const base = 'http://127.0.0.1:4200/';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

await page.goto(base, { waitUntil: 'networkidle', timeout: 120000 });

await page.screenshot({
  path: join(outDir, '01-tour-of-heroes-list-remove-spaces-pipe.png'),
  fullPage: true,
});

const input = page.locator('#hero-blur-demo');
await input.fill('angular');
await page.screenshot({
  path: join(outDir, '02-input-format-lowercase-before-blur.png'),
  fullPage: true,
});

await input.blur();
await page.waitForTimeout(300);

await page.screenshot({
  path: join(outDir, '03-input-format-uppercase-after-blur.png'),
  fullPage: true,
});

await browser.close();

console.log(`Wrote PNGs to: ${outDir}`);

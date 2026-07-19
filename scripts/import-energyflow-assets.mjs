import { mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const sourceRoot = process.argv[2] ? path.resolve(process.argv[2]) : null;
const outputRoot = path.join(process.cwd(), "public", "photo", "energyflow");

const screenshotLocales = {
  zh: "\u4e2d\u6587",
  en: "\u82f1\u6587",
  ja: "\u65e5\u8bed",
  ko: "\u97e9\u8bed",
  fr: "\u6cd5\u8bed",
  de: "\u5fb7\u8bed",
  es: "\u897f\u73ed\u7259\u8bed",
  pt: "\u8461\u8404\u7259\u8bed",
};

const posterLocales = {
  zh: "\u4e2d\u6587",
  en: "\u82f1\u6587",
};

const folders = {
  posters: "\u5e7f\u544a\u56fe\u7247",
  screenshots: "\u754c\u9762\u622a\u56fe",
};

function fail(message) {
  throw new Error(`[import-energyflow-assets] ${message}`);
}

async function imageFiles(directory) {
  let entries;
  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch {
    fail(`Missing source directory: ${directory}`);
  }

  return entries
    .filter((entry) => entry.isFile() && /\.(png|jpe?g|webp)$/i.test(entry.name))
    .map((entry) => path.join(directory, entry.name))
    .sort((left, right) => left.localeCompare(right, "en", { numeric: true }));
}

async function ensureSourceRoot() {
  if (!sourceRoot) {
    fail("Pass the EnergyFlow promotion-image directory as the first argument.");
  }

  try {
    if (!(await stat(sourceRoot)).isDirectory()) fail(`Not a directory: ${sourceRoot}`);
  } catch {
    fail(`Source directory does not exist: ${sourceRoot}`);
  }
}

async function convertScreenshots() {
  let totalBytes = 0;

  for (const [locale, sourceName] of Object.entries(screenshotLocales)) {
    const files = await imageFiles(path.join(sourceRoot, folders.screenshots, sourceName));
    if (files.length !== 13) fail(`${locale} must contain 13 screenshots; found ${files.length}.`);

    const destination = path.join(outputRoot, locale, "screenshots");
    await mkdir(destination, { recursive: true });

    for (const [index, file] of files.entries()) {
      const metadata = await sharp(file).metadata();
      if (metadata.width !== 480 || metadata.height !== 600) {
        fail(`${path.basename(file)} must be 480x600; found ${metadata.width}x${metadata.height}.`);
      }

      const output = path.join(destination, `screenshot-${String(index + 1).padStart(2, "0")}.webp`);
      await sharp(file).rotate().webp({ quality: 82, effort: 5 }).toFile(output);
      totalBytes += (await stat(output)).size;
    }
  }

  return totalBytes;
}

async function convertPosters() {
  let totalBytes = 0;

  for (const [locale, sourceName] of Object.entries(posterLocales)) {
    const files = await imageFiles(path.join(sourceRoot, folders.posters, sourceName));
    if (files.length !== 4) fail(`${locale} must contain 4 posters; found ${files.length}.`);

    const destination = path.join(outputRoot, locale, "posters");
    await mkdir(destination, { recursive: true });

    for (const [index, file] of files.entries()) {
      const output = path.join(destination, `poster-${String(index + 1).padStart(2, "0")}.webp`);
      await sharp(file)
        .rotate()
        .resize({ width: 1400, withoutEnlargement: true })
        .webp({ quality: 80, effort: 5 })
        .toFile(output);
      totalBytes += (await stat(output)).size;
    }
  }

  return totalBytes;
}

function formatSize(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

async function main() {
  await ensureSourceRoot();
  const [screenshotBytes, posterBytes] = await Promise.all([
    convertScreenshots(),
    convertPosters(),
  ]);

  console.log("[import-energyflow-assets] Imported 104 screenshots across 8 locales.");
  console.log("[import-energyflow-assets] Imported 8 posters across 2 locales.");
  console.log(`[import-energyflow-assets] Screenshots: ${formatSize(screenshotBytes)}; posters: ${formatSize(posterBytes)}.`);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});

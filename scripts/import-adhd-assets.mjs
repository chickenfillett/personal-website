import { mkdir, readdir, rename, rm, stat } from "node:fs/promises";
import { basename, join, resolve } from "node:path";
import sharp from "sharp";

const sourceRoot = process.argv[2];

if (!sourceRoot) {
  console.error("Usage: node scripts/import-adhd-assets.mjs <ADHD promotional-images-directory>");
  process.exit(1);
}

const posterLocales = [
  { source: "中文", output: "zh" },
  { source: "英文", output: "en" },
];

const screenshotLocales = [
  { source: "中文", output: "zh" },
  { source: "英文", output: "en" },
  { source: "日语", output: "ja" },
  { source: "德语", output: "de" },
  { source: "法语", output: "fr" },
  { source: "西班牙语", output: "es" },
  { source: "俄语", output: "ru" },
  { source: "葡萄牙语", output: "pt" },
];

async function isDirectory(path) {
  try {
    return (await stat(path)).isDirectory();
  } catch {
    return false;
  }
}

async function locateAssetDirectory(name) {
  const direct = resolve(sourceRoot);
  if (basename(direct) === name) return direct;
  const nested = resolve(direct, name);
  return (await isDirectory(nested)) ? nested : null;
}

function sequenceNumber(file) {
  const match = file.match(/\((\d+)\)\.png$/i);
  return match ? Number(match[1]) : Number.NaN;
}

async function writeWebp(input, destination, width, quality) {
  const temporary = `${destination}.tmp`;
  await sharp(input)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 5, smartSubsample: true })
    .toFile(temporary);
  await rm(destination, { force: true });
  await rename(temporary, destination);
}

async function importPosterLocale(root, { source, output }) {
  const sourceDirectory = resolve(root, source);
  const outputDirectory = resolve("public", "photo", "adhd-focus-timer", output, "posters");
  const files = (await readdir(sourceDirectory))
    .filter((file) => Number.isFinite(sequenceNumber(file)))
    .sort((left, right) => sequenceNumber(left) - sequenceNumber(right));

  if (files.length !== 4 || files.some((file, index) => sequenceNumber(file) !== index + 1)) {
    throw new Error(`${sourceDirectory} must contain exactly four numbered PNG files: (1) through (4).`);
  }

  await mkdir(outputDirectory, { recursive: true });

  for (const [index, file] of files.entries()) {
    const input = join(sourceDirectory, file);
    const metadata = await sharp(input).metadata();
    const aspectRatio = (metadata.width ?? 0) / (metadata.height ?? 1);

    if (metadata.format !== "png" || !metadata.width || !metadata.height || Math.abs(aspectRatio - 16 / 9) > 0.02) {
      throw new Error(`${basename(input)} must be a valid 16:9 PNG image.`);
    }

    const filename = `poster-${String(index + 1).padStart(2, "0")}.webp`;
    const destination = join(outputDirectory, filename);
    await writeWebp(input, destination, 1400, 80);

    const outputMetadata = await sharp(destination).metadata();
    const outputStats = await stat(destination);
    console.log(
      `${output}/${filename}: ${outputMetadata.width}x${outputMetadata.height}, ${Math.round(outputStats.size / 1024)} KiB`,
    );
  }
}

async function importScreenshotLocale(root, { source, output }) {
  const sourceDirectory = resolve(root, source);
  const outputDirectory = resolve("public", "photo", "adhd-focus-timer", output, "screenshots");
  const files = (await readdir(sourceDirectory))
    .filter((file) => /^\d{2}-.+\.png$/i.test(file))
    .sort((left, right) => left.localeCompare(right, "en", { numeric: true }));

  if (files.length !== 7 || files.some((file, index) => !file.startsWith(String(index + 1).padStart(2, "0")))) {
    throw new Error(`${sourceDirectory} must contain exactly seven PNG files numbered 01 through 07.`);
  }

  await mkdir(outputDirectory, { recursive: true });

  for (const [index, file] of files.entries()) {
    const input = join(sourceDirectory, file);
    const metadata = await sharp(input).metadata();
    const aspectRatio = (metadata.width ?? 0) / (metadata.height ?? 1);
    if (metadata.format !== "png" || !metadata.width || !metadata.height || Math.abs(aspectRatio - 16 / 9) > 0.02) {
      throw new Error(`${basename(input)} must be a valid 16:9 PNG image.`);
    }

    const filename = `screenshot-${String(index + 1).padStart(2, "0")}.webp`;
    const destination = join(outputDirectory, filename);
    await writeWebp(input, destination, 1400, 78);

    const outputStats = await stat(destination);
    console.log(`${output}/${filename}: 1400x788, ${Math.round(outputStats.size / 1024)} KiB`);
  }
}

const posterRoot = await locateAssetDirectory("广告图");
const screenshotRoot = await locateAssetDirectory("界面截图");

if (!posterRoot && !screenshotRoot) {
  throw new Error(`${resolve(sourceRoot)} does not contain 广告图 or 界面截图.`);
}

if (posterRoot) {
  for (const locale of posterLocales) await importPosterLocale(posterRoot, locale);
}

if (screenshotRoot) {
  for (const locale of screenshotLocales) await importScreenshotLocale(screenshotRoot, locale);
}

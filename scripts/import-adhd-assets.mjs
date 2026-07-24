import { mkdir, readdir, rename, rm, stat } from "node:fs/promises";
import { basename, join, resolve } from "node:path";
import sharp from "sharp";

const sourceRoot = process.argv[2];

if (!sourceRoot) {
  console.error("Usage: node scripts/import-adhd-assets.mjs <advertising-image-directory>");
  process.exit(1);
}

const locales = [
  { source: "中文", output: "zh" },
  { source: "英文", output: "en" },
];

function sequenceNumber(file) {
  const match = file.match(/\((\d+)\)\.png$/i);
  return match ? Number(match[1]) : Number.NaN;
}

async function importLocale({ source, output }) {
  const sourceDirectory = resolve(sourceRoot, source);
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
    const temporary = `${destination}.tmp`;

    await sharp(input)
      .resize({ width: 1400, withoutEnlargement: true })
      .webp({ quality: 80, effort: 5, smartSubsample: true })
      .toFile(temporary);

    await rm(destination, { force: true });
    await rename(temporary, destination);

    const outputMetadata = await sharp(destination).metadata();
    const outputStats = await stat(destination);
    console.log(
      `${output}/${filename}: ${outputMetadata.width}x${outputMetadata.height}, ${Math.round(outputStats.size / 1024)} KiB`,
    );
  }
}

for (const locale of locales) await importLocale(locale);

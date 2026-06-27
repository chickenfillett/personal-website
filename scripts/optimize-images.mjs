import { mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const sourceDir = path.join(root, "public", "photo");
const outputDir = path.join(root, "public", "photo-optimized");
const supported = /\.(png|jpe?g)$/i;
const targetWidth = 1400;
const quality = 78;

async function loadSharp() {
  try {
    const mod = await import("sharp");
    return mod.default;
  } catch (error) {
    console.warn("[optimize-images] sharp is not available yet. Run npm install, then retry.");
    return null;
  }
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(fullPath));
    } else if (supported.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

async function isFresh(input, output) {
  try {
    const [inputStat, outputStat] = await Promise.all([stat(input), stat(output)]);
    return outputStat.mtimeMs >= inputStat.mtimeMs && outputStat.size > 0;
  } catch {
    return false;
  }
}

async function main() {
  const sharp = await loadSharp();
  if (!sharp) return;

  await mkdir(outputDir, { recursive: true });

  let files = [];
  try {
    files = await walk(sourceDir);
  } catch {
    console.warn("[optimize-images] No public/photo directory found. Skipping.");
    return;
  }

  let converted = 0;
  let skipped = 0;

  for (const file of files) {
    const relative = path.relative(sourceDir, file);
    const parsed = path.parse(relative);
    const outDir = path.join(outputDir, parsed.dir);
    const outFile = path.join(outDir, `${parsed.name}.webp`);

    await mkdir(outDir, { recursive: true });

    if (await isFresh(file, outFile)) {
      skipped++;
      continue;
    }

    await sharp(file)
      .rotate()
      .resize({ width: targetWidth, withoutEnlargement: true })
      .webp({ quality, effort: 5 })
      .toFile(outFile);

    converted++;
  }

  console.log(`[optimize-images] ${converted} converted, ${skipped} already fresh.`);
}

main().catch((error) => {
  console.error("[optimize-images] Failed:", error);
  process.exitCode = 1;
});

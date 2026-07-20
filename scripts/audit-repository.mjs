import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, extname, join, relative, resolve } from "node:path";

const root = process.cwd();
const sourceRoot = resolve(root, "src");
const publicRoot = resolve(root, "public");
const sourceExtensions = [".ts", ".tsx"];
const forbiddenPaths = [
  ".trae",
  "public/photo-optimized",
  "scripts/optimize-images.mjs",
  "src/lib/siteCopy.ts",
  "src/lib/site-copy",
];
const forbiddenSourceText = [
  "@/lib/siteCopy",
  "@/lib/siteContent",
  "optimizedImagePath",
  "energyFlowFreePricing",
  "/photo/捕获",
  "/photo-optimized/",
];
const assetDirectories = {
  ...Object.fromEntries(
    ["zh", "en", "ja", "ko", "fr", "de", "es", "pt"].map((locale) => [
      `public/photo/energyflow/${locale}/screenshots`,
      13,
    ]),
  ),
  "public/photo/energyflow/zh/posters": 4,
  "public/photo/energyflow/en/posters": 4,
  ...Object.fromEntries(
    ["zh", "en", "ja", "fr", "de", "es"].map((locale) => [
      `public/photo/adhd-focus-timer/${locale}/screenshots`,
      7,
    ]),
  ),
  "public/photo/deskhaven/zh/screenshots": 20,
  "public/photo/deskhaven/zh-tw/screenshots": 18,
  "public/photo/deskhaven/en/screenshots": 21,
  "public/photo/deskhaven/ja/screenshots": 20,
  "public/photo/deskhaven/ko/screenshots": 21,
  "public/photo/deskhaven/fr/screenshots": 20,
  "public/photo/deskhaven/de/screenshots": 21,
  "public/photo/deskhaven/es/screenshots": 21,
  "public/photo/deskhaven/ru/screenshots": 20,
  "public/photo/deskhaven/pt/screenshots": 21,
  "public/photo/deskhaven/zh/posters": 10,
  "public/photo/deskhaven/zh-tw/posters": 10,
  "public/photo/deskhaven/en/posters": 10,
  "public/photo/deskhaven/ja/posters": 10,
  "public/photo/deskhaven/fr/posters": 10,
  "public/photo/deskhaven/es/posters": 9,
  "public/photo/deskhaven/ru/posters": 10,
  "public/photo/deskhaven/pt/posters": 10,
};

function walk(directory, extensions) {
  if (!existsSync(directory)) return [];
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return walk(path, extensions);
    return !extensions || extensions.has(extname(entry.name).toLowerCase()) ? [path] : [];
  });
}

function display(path) {
  return relative(root, path).replaceAll("\\", "/");
}

function resolveSourceImport(fromFile, specifier) {
  const base = specifier.startsWith("@/")
    ? resolve(sourceRoot, specifier.slice(2))
    : specifier.startsWith(".")
      ? resolve(dirname(fromFile), specifier)
      : null;
  if (!base) return null;

  for (const candidate of [
    base,
    ...sourceExtensions.map((extension) => `${base}${extension}`),
    ...sourceExtensions.map((extension) => join(base, `index${extension}`)),
  ]) {
    if (existsSync(candidate) && statSync(candidate).isFile()) return candidate;
  }
  return null;
}

function findUnreachableSourceFiles(sourceFiles) {
  const imports = new Map();
  const importPattern = /(?:from\s+|import\s*\(|import\s+)["']([^"']+)["']/g;

  for (const file of sourceFiles) {
    const text = readFileSync(file, "utf8");
    const dependencies = [];
    for (const match of text.matchAll(importPattern)) {
      const dependency = resolveSourceImport(file, match[1]);
      if (dependency) dependencies.push(dependency);
    }
    imports.set(file, dependencies);
  }

  const entryPattern = /src\/app\/(?:.*\/)?(?:page|layout|not-found|route)\.tsx?$/;
  const entries = sourceFiles.filter((file) => entryPattern.test(display(file)));
  const reachable = new Set();
  const pending = [...entries];

  while (pending.length > 0) {
    const file = pending.pop();
    if (!file || reachable.has(file)) continue;
    reachable.add(file);
    pending.push(...(imports.get(file) ?? []));
  }

  return sourceFiles.filter((file) => !reachable.has(file));
}

const problems = [];

for (const path of forbiddenPaths) {
  if (existsSync(resolve(root, path))) problems.push(`obsolete path remains: ${path}`);
}

const sourceFiles = walk(sourceRoot, new Set(sourceExtensions));
for (const file of sourceFiles) {
  const text = readFileSync(file, "utf8");
  for (const fragment of forbiddenSourceText) {
    if (text.includes(fragment)) problems.push(`legacy reference '${fragment}' in ${display(file)}`);
  }

  for (const match of text.matchAll(/["'](\/photo\/[^"'`$]+)["']/g)) {
    const publicPath = resolve(publicRoot, match[1].slice(1));
    if (!existsSync(publicPath)) problems.push(`missing referenced asset '${match[1]}' in ${display(file)}`);
  }
}

for (const file of findUnreachableSourceFiles(sourceFiles)) {
  problems.push(`unreachable source file: ${display(file)}`);
}

const publicFiles = walk(publicRoot);
const photoFiles = publicFiles.filter((file) => display(file).startsWith("public/photo/"));
for (const file of photoFiles) {
  if (extname(file).toLowerCase() !== ".webp") problems.push(`non-WebP product asset: ${display(file)}`);
}

for (const [directory, expectedCount] of Object.entries(assetDirectories)) {
  const files = walk(resolve(root, directory));
  if (files.length !== expectedCount) {
    problems.push(`asset count mismatch in ${directory}: expected ${expectedCount}, found ${files.length}`);
  }
}

const hashes = new Map();
for (const file of publicFiles) {
  const hash = createHash("sha256").update(readFileSync(file)).digest("hex");
  const files = hashes.get(hash) ?? [];
  files.push(display(file));
  hashes.set(hash, files);
}

for (const files of hashes.values()) {
  if (files.length > 1) problems.push(`duplicate public files: ${files.join(", ")}`);
}

if (problems.length > 0) {
  console.error(`Repository audit failed with ${problems.length} problem(s):`);
  for (const problem of problems) console.error(`- ${problem}`);
  process.exit(1);
}

console.log(`Repository audit passed: ${sourceFiles.length} source files and ${publicFiles.length} public files checked.`);

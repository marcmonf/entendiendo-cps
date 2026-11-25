#!/usr/bin/env node
/**
 * Extrae el contenido origen en español desde:
 *   - src/data/atlasData.ts
 *   - src/data/deepDives.ts
 *   - src/i18n/esStrings.ts
 * al mismo formato exacto que public/locales/en.json, y lo trocea en:
 *   - <outDir>/es_source.json  (completo)
 *   - <outDir>/es_00.json      (UI + metadatos: routes, pillars, attractors, themes, problems, tourDesktop, tourMobile, families)
 *   - <outDir>/es_01.json .. <outDir>/es_18.json (~6-7 conceptos por archivo)
 *
 * Uso:
 *   node traducciones/scripts/extract_and_split.mjs [--out traducciones/tmp] [--chunks 18]
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '..', '..');

const require = createRequire(path.join(REPO_ROOT, 'package.json'));
const esbuild = require('esbuild');

function parseArgs(argv) {
  let outDir = path.join(REPO_ROOT, 'traducciones', 'tmp');
  let numChunks = 18;
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--out' && argv[i + 1]) {
      outDir = path.resolve(REPO_ROOT, argv[++i]);
    } else if (argv[i] === '--chunks' && argv[i + 1]) {
      numChunks = parseInt(argv[++i], 10);
    }
  }
  return { outDir, numChunks };
}

async function loadTsModule(tsRelPath, tmpDir) {
  const absPath = path.join(REPO_ROOT, tsRelPath);
  const outFile = path.join(
    tmpDir,
    `_bundle_${path.basename(tsRelPath, '.ts')}_${process.pid}.mjs`
  );
  await esbuild.build({
    entryPoints: [absPath],
    outfile: outFile,
    bundle: true,
    format: 'esm',
    platform: 'node',
    logLevel: 'silent',
  });
  try {
    return await import(`${pathToFileURL(outFile).href}?t=${Date.now()}`);
  } finally {
    try {
      fs.unlinkSync(outFile);
    } catch {
      // ignore
    }
  }
}

async function main() {
  const { outDir, numChunks } = parseArgs(process.argv.slice(2));
  fs.mkdirSync(outDir, { recursive: true });

  const [atlasMod, deepMod, esMod] = await Promise.all([
    loadTsModule('src/data/atlasData.ts', outDir),
    loadTsModule('src/data/deepDives.ts', outDir),
    loadTsModule('src/i18n/esStrings.ts', outDir),
  ]);

  const {
    FAMILIES,
    CONCEPTS,
    GUIDED_ROUTES,
    FOUR_PILLARS,
    FIVE_ATTRACTORS,
    ALL_15_THEMES,
  } = atlasMod;
  const { DEEP_DIVES } = deepMod;
  const { UI_ES, REAL_PROBLEMS_ES, TOUR_DESKTOP_ES, TOUR_MOBILE_ES } = esMod;

  const routes = {};
  for (const r of GUIDED_ROUTES) {
    const stepNotes = {};
    for (const st of r.steps) {
      stepNotes[st.slug] = st.note;
    }
    routes[r.id] = {
      title: r.title,
      subtitle: r.subtitle,
      duration: r.duration,
      stepNotes,
    };
  }

  const pillars = {};
  for (const p of FOUR_PILLARS) {
    pillars[p.slug] = {
      name: p.name,
      desc: p.desc,
    };
  }

  const attractors = FIVE_ATTRACTORS.map((a) => ({
    name: a.name,
    detail: a.detail,
  }));

  const themes = {};
  for (const th of ALL_15_THEMES) {
    themes[th.name] = th.name;
  }

  const problems = {};
  for (const p of REAL_PROBLEMS_ES) {
    problems[p.id] = {
      question: p.question,
      diagnosis: p.diagnosis,
    };
  }

  const families = {};
  for (const f of FAMILIES) {
    families[f.id] = {
      name: f.name,
      shortName: f.shortName,
      subtitle: f.subtitle,
      description: f.description,
    };
  }

  const concepts = {};
  for (const c of CONCEPTS) {
    const entry = {
      term: c.term,
      short: c.short,
      analogy: c.analogy,
      howToApply: c.howToApply,
      antiPattern: c.antiPattern,
      paragraphs: c.paragraphs,
      origin: c.origin,
      aliases: c.aliases,
      domains: c.domains ?? null,
    };
    if (DEEP_DIVES[c.slug]) {
      entry.deepDive = DEEP_DIVES[c.slug];
    }
    concepts[c.slug] = entry;
  }

  const esSource = {
    lang: 'es',
    ui: UI_ES,
    routes,
    pillars,
    attractors,
    themes,
    problems,
    tourDesktop: TOUR_DESKTOP_ES,
    tourMobile: TOUR_MOBILE_ES,
    families,
    concepts,
  };

  // Write full source
  const sourcePath = path.join(outDir, 'es_source.json');
  fs.writeFileSync(sourcePath, JSON.stringify(esSource, null, 2) + '\n', 'utf8');

  // Write block 00 (UI + metadata)
  const block00 = {
    lang: 'es',
    ui: UI_ES,
    routes,
    pillars,
    attractors,
    themes,
    problems,
    tourDesktop: TOUR_DESKTOP_ES,
    tourMobile: TOUR_MOBILE_ES,
    families,
  };
  fs.writeFileSync(
    path.join(outDir, 'es_00.json'),
    JSON.stringify(block00, null, 2) + '\n',
    'utf8'
  );

  // Split concepts evenly across numChunks files (01..18)
  const slugs = Object.keys(concepts);
  const total = slugs.length;
  const baseSize = Math.floor(total / numChunks);
  const remainder = total % numChunks;

  let offset = 0;
  const chunkSummary = [];
  for (let i = 1; i <= numChunks; i++) {
    const size = baseSize + (i <= remainder ? 1 : 0);
    const slice = slugs.slice(offset, offset + size);
    offset += size;

    const chunkConcepts = {};
    for (const slug of slice) {
      chunkConcepts[slug] = concepts[slug];
    }
    const idx = String(i).padStart(2, '0');
    const chunkPath = path.join(outDir, `es_${idx}.json`);
    fs.writeFileSync(
      chunkPath,
      JSON.stringify({ concepts: chunkConcepts }, null, 2) + '\n',
      'utf8'
    );
    chunkSummary.push(`es_${idx}.json (${slice.length}: ${slice[0]}..${slice[slice.length - 1]})`);
  }

  console.log(`Extracted ${total} concepts, ${Object.keys(UI_ES).length} UI strings, ${Object.keys(families).length} families.`);
  console.log(`Output directory: ${path.relative(REPO_ROOT, outDir)}`);
  console.log(`  - es_source.json (full)`);
  console.log(`  - es_00.json (UI + metadata)`);
  for (const line of chunkSummary) {
    console.log(`  - ${line}`);
  }
}

main().catch((err) => {
  console.error('extract_and_split failed:', err);
  process.exit(1);
});

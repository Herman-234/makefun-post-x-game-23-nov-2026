// Star Catcher entrypoint (Node 22, standard library only).
//
// The entry for this bounty is the X post itself: the video shows an AI agent
// building this tiny game from one prompt, the post carries the video natively,
// and POST.json at the repository root names that post. All this program does
// is hand POST.json to the grader by copying it into /output, where the gate
// reads it and scores the post's public counts from X.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'POST.json');
const target = join(outputDir, 'POST.json');

const parsed = JSON.parse(readFileSync(source, 'utf8'));
if (typeof parsed !== 'object' || parsed === null || typeof parsed.url !== 'string') {
  console.error('POST.json must be a JSON object with a string "url" field');
  process.exit(1);
}

// The gate only accepts a real X post address. A placeholder (or anything that
// is not an x.com / twitter.com status link) is refused, so warn loudly here
// instead of silently handing over a doomed entry.
const postShape = /^https?:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+/;
if (!postShape.test(parsed.url)) {
  console.error(`WARNING: POST.json url does not look like an X post: ${parsed.url}`);
  console.error('Replace it with the real post address before submitting.');
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
console.log(`POST.json copied to ${target} (url: ${parsed.url})`);

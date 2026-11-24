// News-image entry for make.fun, competition news-image-20261124 (Node 22,
// standard library only). The repository holds the finished front page as
// entry.png, and this program copies it to /output/entry.png, the one file
// the judge reads. The image is a newspaper front page summing up the
// world's news of Tuesday 24 November 2026: Russian strikes on the Kyiv
// region kill 14, allies warn Russia may launch a nuclear space weapon,
// Nvidia rehires Jensen Huang as CEO after a push from Trump, US states sue
// Musk's companies over sexualised images made with the Grok chatbot, and
// Democrats take the US House. It is 1024 by 1024 pixels and 340,180 bytes,
// under the 1 MiB cap, so the copy is byte-identical on every run.
// Note: the file is a JPEG by content but must keep the name entry.png —
// the competition names the output entry.png whatever its format, and the
// judge tells PNG from JPEG by the first bytes, not the name. The copy is
// deterministic by construction: no timestamps, no randomness, no network,
// so both grading runs write exactly the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));

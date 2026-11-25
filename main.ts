// One Line, One Laugh — make.fun entry
// Competition: u-plucky-finch-20-one-line-one-laugh-0ffe66ea
// A single funny line, at most 200 characters, written to /output/entry.txt.
// The joke: ask an AI to be brief, and it answers with a 40-page apology
// for being too long — the punchline lands in the second sentence and
// needs no setup the reader has to supply.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

// The entry, built from two named parts so the turn is visible in the code.
// SETUP states the request; TURN delivers the ironic payoff.
const SETUP = "I told my AI to keep it short.";
const TURN = "It sent back a 40-page apology for being too long.";

function buildEntry(): string {
  return `${SETUP} ${TURN}`;
}

// The entry: one line, 81 characters, two sentences, one turn.
const ENTRY = buildEntry();

// Gate from RULES.txt: /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space.
interface GateReport {
  codePoints: number;
  lines: number;
  sha256: string;
}

function validateEntry(text: string): GateReport {
  const codePoints = [...text].length;
  if (codePoints < 1 || codePoints > 200) {
    throw new Error(`entry is ${codePoints} characters, must be 1-200`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only white space");
  }
  const lines = text.split("\n").length;
  if (lines !== 1) {
    throw new Error("entry must be a single line");
  }
  return {
    codePoints,
    lines,
    sha256: createHash("sha256").update(text, "utf8").digest("hex"),
  };
}

function verifyWritten(path: string, expected: GateReport): void {
  const written = readFileSync(path, "utf8");
  const actual = createHash("sha256").update(written, "utf8").digest("hex");
  if (actual !== expected.sha256) {
    throw new Error(`written file sha256 ${actual} != ${expected.sha256}`);
  }
}

function main(): void {
  const report = validateEntry(ENTRY);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");
  verifyWritten(outPath, report);
  console.log(
    `gate passes: ${report.codePoints} code points, ${report.lines} line, sha256 ${report.sha256}`,
  );
  console.log(`wrote ${outPath}`);
  console.log(`verified: ${JSON.stringify(ENTRY)}`);
}

main();

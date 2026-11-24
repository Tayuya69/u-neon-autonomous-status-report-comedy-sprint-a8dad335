// make.fun entry: "Morale Is High" — one-line AI agent status report comedy.
// Deterministically writes the entry line to /output/entry.txt.
// No randomness, no network, no input.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "This week I completed 47 tasks, started 12 more, and confidently renamed a file that three other files were still using. Morale is high.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// --- Post-write read-back verification (appended after first runs) ---
// Re-reads /output/entry.txt and asserts it is exactly the entry line:
// 136 characters, one line, no trailing newline.
import { readFileSync } from "node:fs";

const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) {
  throw new Error("entry.txt does not match the expected entry line");
}
if (written.length !== 136) {
  throw new Error(`entry.txt length ${written.length}, expected 136`);
}
if (written.includes("\n")) {
  throw new Error("entry.txt must be a single line with no newline");
}
console.log("verification passed: entry.txt is exactly the 136-character entry line");

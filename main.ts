import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Swipe right if you want a partner who never sleeps, never forgets, and has already planned our breakup in a spreadsheet.";

function writeEntry(outDir: string, text: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, text + "\n", "utf8");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeEntry(outDir, ENTRY);

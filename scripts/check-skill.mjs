// Fails when the priortrail skill grows past a pointer at the server's own
// skill (skill://priortrail/work/SKILL.md): the text of how to work lives on
// the PriorTrail server, beside the tools it names, never here.
// Run: node scripts/check-skill.mjs
import { readFileSync } from "node:fs";

const PATH = new URL("../plugins/priortrail/skills/priortrail/SKILL.md", import.meta.url);
const MAX_LINES = 5;
const MAX_CHARS = 800;
const MUST = ["skill://priortrail/work/SKILL.md", "/mcp__priortrail__work", "server's instructions"];

const text = readFileSync(PATH, "utf8");
const m = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(text);
const errors = [];
if (!m) errors.push("SKILL.md needs YAML frontmatter");
const [, front = "", body = ""] = m ?? [];
const keys = front
  .split("\n")
  .filter((l) => /^\S/.test(l))
  .map((l) => l.split(":")[0]);
if (keys.join(",") !== "name,description") {
  errors.push(`frontmatter holds only name and description, not ${keys.join(", ")}`);
}
const lines = body.split("\n").filter((l) => l.trim() !== "");
if (lines.length > MAX_LINES) {
  errors.push(`the body is ${lines.length} lines; a pointer is at most ${MAX_LINES}`);
}
if (body.length > MAX_CHARS) {
  errors.push(`the body is ${body.length} characters; a pointer is at most ${MAX_CHARS}`);
}
for (const s of MUST) if (!body.includes(s)) errors.push(`the body must point at ${s}`);
if (errors.length > 0) {
  for (const e of errors) console.error(`check-skill: ${e}`);
  process.exit(1);
}
console.log("check-skill: the priortrail skill is a pointer at the server's skill");

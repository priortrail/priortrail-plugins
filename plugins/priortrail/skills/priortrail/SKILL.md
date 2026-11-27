---
name: priortrail
description: Work PriorTrail's queue through its MCP server. Use when the person asks to work PriorTrail, pull or do PriorTrail work, frame, discover, deliver, instrument or learn a problem from PriorTrail, or names a problem by its tag (such as P-0142).
---

# Work PriorTrail's queue

1. Read the resource `skill://priortrail/work/SKILL.md` from the `priortrail` MCP server and follow it; if the person named a station, work only that queue.
2. If the server has no such resource, run its prompt `work` (`/mcp__priortrail__work` in Claude Code).
3. Otherwise, follow the `priortrail` server's instructions.

If the server's tools are missing or ask for sign-in, ask the person to sign in (Claude Code: `/mcp`, pick `priortrail`, Authenticate; Codex: `codex mcp login priortrail`) and stop.

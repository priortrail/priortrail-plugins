# PriorTrail plugins

Connect Claude Code or Codex to [PriorTrail](https://priortrail.com) and work its queue.

## Claude Code

```
/plugin marketplace add priortrail/priortrail-plugins
/plugin install priortrail@priortrail
```

Then `/mcp`, pick `priortrail` and Authenticate: the browser opens PriorTrail, where you pick the workspace and allow the agent. Start with `/priortrail:work`, or `/priortrail:work frame` for one station.

Without the plugin: `claude mcp add --transport http --scope user priortrail https://priortrail.com/mcp`, then `/mcp__priortrail__work`.

## Codex

Add this repository as a plugin marketplace, install `priortrail`, then run `codex mcp login priortrail`. Ask Codex to "work PriorTrail's queue."

Without the plugin: `codex mcp add priortrail --url https://priortrail.com/mcp`, then `codex mcp login priortrail`.

## What it is

- `plugins/priortrail/.mcp.json`: PriorTrail's MCP server at `https://priortrail.com/mcp`. It signs in with OAuth, so there is no token to paste.
- `plugins/priortrail/skills/priortrail`: how to work the queue (lease, read, do, submit, release, ask a person).
- `plugins/priortrail/commands/work.md`: `/priortrail:work` in Claude Code.

The server itself teaches the work too: it offers the prompt `work` and says how in its instructions, so any MCP client works without a plugin.

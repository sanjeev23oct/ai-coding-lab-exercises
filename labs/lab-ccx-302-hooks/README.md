# Lab CCX-302: Set Up Quality Gate Hooks

**Track:** Claude Code Complete · **Module:** Hooks — Automated Quality Gates
**Difficulty:** Intermediate · **Time:** ~30 min · **Points:** 200

---

> ## ⚡ Claude Code Setup — One-Time Only
>
> Claude Code is pre-configured automatically via your **LAB_TOKEN** Codespace secret.
>
> **First time?** Do this once:
> 1. Go to **[ai-coding.guru/settings](https://ai-coding.guru/settings) → API Keys** and copy your Lab Token
> 2. Add it at **[github.com/settings/codespaces](https://github.com/settings/codespaces)** — secret name: `LAB_TOKEN`, set **Repository access → sanjeev23oct/ai-coding-lab-exercises**
> 3. Rebuild this Codespace
> 4. In the terminal, run: `bash /workspaces/ai-coding-lab-exercises/scripts/setup-claude.sh`
>
> **Already set up?** Re-run: `bash /workspaces/ai-coding-lab-exercises/scripts/setup-claude.sh`

---

## What You'll Build

Two quality gates that run automatically during every Claude Code session:

1. **Dangerous command blocker** — blocks `rm -rf`, `git push --force`, and `DROP TABLE` before execution
2. **Auto-test runner** — runs `npm test` automatically after Claude Code edits any `.js` file

---

## Setup

```bash
mkdir -p .claude/hooks
```

---

## Hook 1: Dangerous Command Blocker

Create `.claude/hooks/block-dangerous.sh`:

```bash
#!/bin/bash
# Reads the proposed bash command from stdin (JSON)
# Exits with code 2 to block, 0 to allow

INPUT=$(cat)
COMMAND=$(echo "$INPUT" | node -e "const d=require('fs').readFileSync('/dev/stdin','utf8'); const p=JSON.parse(d); console.log(p.tool_input?.command || '')")

# Block dangerous patterns
if echo "$COMMAND" | grep -qE '(rm\s+-rf|git push --force|DROP TABLE|truncate\s+table)'; then
  echo "BLOCKED: Dangerous command detected: $COMMAND" >&2
  exit 2
fi

exit 0
```

Make it executable:

```bash
chmod +x .claude/hooks/block-dangerous.sh
```

Now add it to `.claude/settings.json`:

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "bash /workspaces/ai-coding-lab-exercises/labs/lab-ccx-302-hooks/.claude/hooks/block-dangerous.sh"
          }
        ]
      }
    ]
  }
}
```

---

## Hook 2: Auto-Test Runner

Add a `PostToolUse` hook that runs tests after any `.js` file is edited. Update `.claude/settings.json`:

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "bash /workspaces/ai-coding-lab-exercises/labs/lab-ccx-302-hooks/.claude/hooks/block-dangerous.sh"
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": ".*\\.js$",
        "hooks": [
          {
            "type": "command",
            "command": "cd /workspaces/ai-coding-lab-exercises/labs/lab-ccx-302-hooks && npm test 2>&1 | tail -5 || true"
          }
        ]
      }
    ]
  }
}
```

---

## Verify Hook 1: Dangerous Command Blocker

Start Claude Code:

```bash
claude
```

Ask it to run a dangerous command:

```
Run: rm -rf ./temp-dir
```

Claude Code should block the command and report it was blocked. You'll see the hook's stderr output.

---

## Verify Hook 2: Auto-Test Runner

Ask Claude Code to edit a source file:

```
Add a function called multiply(a, b) that returns a * b to src/math.js, and add a test for it.
```

After the edit, you should see test output appear automatically — the hook ran `npm test` without you asking.

---

## Inspect What's Happening

To see hook execution in detail, run Claude Code with debug flags:

```bash
claude --debug "hooks"
```

This shows each hook that fires, its input, and its exit code.

---

## Done When

- [ ] `.claude/hooks/block-dangerous.sh` exists and is executable
- [ ] `.claude/settings.json` has both `PreToolUse` and `PostToolUse` hooks
- [ ] Dangerous command (`rm -rf`) is blocked when attempted
- [ ] Tests run automatically after a `.js` file is edited
- [ ] `npm test` passes

Head back to [ai-coding.guru](https://ai-coding.guru) to continue.

# Lab CCX-101: Install & Authenticate

**Track:** Claude Code Complete · **Module:** Installation & Authentication
**Difficulty:** Beginner · **Time:** ~15 min · **Points:** 100

---

---

## What You'll Do

Verify Claude Code is working, understand the authentication model, and run your first meaningful queries. This lab is about building confidence with the tool before you use it on real code.

---

## Task 1 — Verify Claude Code is Running

Open a terminal (**Terminal → New Terminal**) and run:

```bash
claude --version
```

You should see a version number like `1.x.x`. If not, run:

```bash
npm install -g @anthropic-ai/claude-code
```

---

## Task 2 — Check Authentication

```bash
claude auth status
```

You should see your account details — this sandbox comes pre-authenticated, so you shouldn't need to log in. If it ever says "not authenticated," close this lab and relaunch it from the module page for a fresh session. If that doesn't fix it, it's a sandbox issue on our end, not something you can resolve here.

---

## Task 3 — Your First Query

Ask Claude Code a direct question without opening an interactive session:

```bash
claude "What is the current directory and what files are in it?"
```

This uses the `-p` (print/non-interactive) mode. Claude Code answers and exits. No session opened.

---

## Task 4 — Start an Interactive Session

```bash
claude
```

At the `>` prompt, type:

```
List all the files in this directory and explain what each one does.
```

Press **Enter**. Watch the agentic loop: Claude Code uses the `Glob` and `Read` tools, then summarises.

Press **Esc** to stop it mid-response (if needed), or wait for it to finish.

---

## Task 5 — Ask About the Auth Model

Still in the interactive session, ask:

```
How does Claude Code authenticate? What files does it use to store credentials?
```

Claude Code will explain the `~/.claude/` directory, the auth flow, and how API keys are stored.

---

## Task 6 — Check Your Config

Exit Claude Code (`/exit` or Ctrl+C), then look at where your credentials live:

```bash
cat ~/.claude/.credentials.json
```

You'll see an OAuth token, not an API key — this sandbox is signed into a real Claude account, pre-loaded for you. That's why `claude auth status` showed `"authMethod": "claude.ai"` earlier instead of an API key.

---

## Task 7 — Run `/doctor`

Start Claude Code and run the built-in diagnostic:

```bash
claude
```

Then type:

```
/doctor
```

This checks your installation, auth, settings, and reports any issues. Read the output — it's a useful tool you'll use again when debugging.

---

## Done When

- [ ] `claude --version` shows a version number
- [ ] `claude auth status` shows authenticated
- [ ] You ran at least one direct query with `claude "..."`
- [ ] You opened an interactive session and got a response
- [ ] `/doctor` reports no critical issues

---

## What You Just Learned

- Claude Code works in two modes: **interactive** (a session with memory) and **print** (`claude -p "..."` for one-shot queries)
- Authentication lives in `~/.claude/`, pre-configured in this sandbox — no browser sign-in needed
- `/doctor` is your first debugging tool

Head back to [ai-coding.guru](https://ai-coding.guru) to continue.

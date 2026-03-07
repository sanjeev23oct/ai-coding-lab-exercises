# AI Coding Lab — Exercises

Hands-on lab exercises for [ai-coding.guru](https://ai-coding.guru).

Every lab opens in GitHub Codespaces — Claude Code and all tools are pre-installed. No local setup needed.

## Claude Code Track

| Lab | Module | Difficulty | Status |
|-----|--------|------------|--------|
| [lab-cc-101-first-session](labs/lab-cc-101-first-session/) | Your First Claude Code Session | Beginner | Live |
| [lab-cc-102-navigating-codebases](labs/lab-cc-102-navigating-codebases/) | Navigate a Codebase | Beginner | Live |
| [lab-cc-201-claude-md](labs/lab-cc-201-claude-md/) | Write Your First CLAUDE.md | Intermediate | Live |
| [lab-cc-301-slash-command](labs/lab-cc-301-slash-command/) | Build Custom Slash Commands | Intermediate | Live |
| [lab-cc-401-hooks](labs/lab-cc-401-hooks/) | Hooks Quality Gate | Advanced | Live |

## Fundamentals Track

| Lab | Module | Tool | Status |
|-----|--------|------|--------|
| [lab-101-hello-ai](labs/lab-101-hello-ai/) | Your First AI Conversation | Claude Code | Live |

## Quick Start

1. Go to [ai-coding.guru](https://ai-coding.guru) and open any module
2. Click **Launch Sandbox** — GitHub opens automatically
3. Click **Create codespace** (first time) or **Open in browser** (returning)
4. Wait ~1–2 min while the environment builds
5. The lab README opens automatically — follow the tasks

## Common Issues

### Preview not showing for React/web apps
Vite defaults to port **5173**, but the codespace forwards port **3000**.
**Fix:** In the terminal, run your dev server on port 3000:
```bash
npm run dev -- --port 3000
```
Or check the **Ports tab** (bottom panel → Ports) — click the globe icon 🌐 next to port 5173 if it appears there.

### Claude Code asks me to log in
The environment is pre-configured with a shared API key — you should not need to log in.
If you see a login prompt, close it and re-open the terminal. Run `claude` again.
If the issue persists, try: `Ctrl+Shift+P` → "Rebuild Container".

### README didn't open automatically
Find it in the Explorer panel (left sidebar) → `labs/<lab-name>/README.md`, or run:
```bash
code labs/<lab-name>/README.md
```

### Codespace is taking more than 5 minutes to start
This usually means VS Code Server is downloading for the first time. Wait it out — subsequent startups are faster. If it hangs indefinitely, close and re-open the codespace from [github.com/codespaces](https://github.com/codespaces).

### "Failed to fetch" or API errors when using Claude Code
The shared AI proxy has a usage limit. If you see repeated errors, wait a few minutes and try again. Each session has a fair-use token budget.

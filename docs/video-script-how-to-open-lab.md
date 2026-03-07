# Video Script — How to Open a Lab

**Video title:** How to Launch Your First Lab on AI Coding Lab
**Target length:** ~60–90 seconds
**Tool suggestions:** Loom · OBS Studio · macOS Screen Recording (Cmd+Shift+5)
**Lab to demo:** Claude Code Track → Lab 101: Your First Claude Code Session

---

## Scene-by-scene script

---

### Scene 1 — Platform (0:00–0:10)
**Screen:** ai-coding.guru home page
**Action:** Scroll briefly to show the hero, then click **Courses**
**Narration:**
> "AI Coding Lab gives you hands-on labs that run entirely in your browser — no installs, no config. Let me show you how to open one."

---

### Scene 2 — Pick a trail (0:10–0:20)
**Screen:** Courses page → Claude Code tab
**Action:** Click the **Claude Code** hero card (or the first trail)
**Narration:**
> "Choose any trail — I'll open the Claude Code track, which is the best place to start."

---

### Scene 3 — Module list (0:20–0:28)
**Screen:** Trail detail page showing module list
**Action:** Click **Module 1 — Your First Claude Code Session**
**Narration:**
> "Pick the first module. Each module has a lesson and an optional live lab."

---

### Scene 4 — Module viewer + Launch Sandbox (0:28–0:40)
**Screen:** Module viewer — scroll to lab card at the bottom
**Action:** Click **Launch Sandbox**
**Narration:**
> "Scroll to the lab card and click Launch Sandbox. GitHub opens with a pre-configured environment."

---

### Scene 5 — GitHub Codespaces (0:40–0:55)
**Screen:** GitHub Codespaces creation page
**Action:** Click **Create codespace on main** (or **Open in browser** if already exists)
**Narration:**
> "Click Create codespace. The environment builds in about a minute — Claude Code and everything else is already installed."

*(Optional: cut/fast-forward through the ~60s loading screen)*

---

### Scene 6 — Lab opens (0:55–1:15)
**Screen:** VS Code in browser — README opens automatically
**Action:** Show the README with tasks, then briefly open a terminal and type `claude`
**Narration:**
> "The lab README opens automatically with your tasks. Open a terminal, type claude, and you're talking to AI — right here in your browser. No API key needed."

---

### Scene 7 — End card (1:15–1:25)
**Screen:** Back to ai-coding.guru
**Narration:**
> "Every lab on AI Coding Lab works exactly like this. Sign in with GitHub to track your progress — it's completely free."

---

## Recording tips

- **Resolution:** 1920×1080, or record a browser window at 1280×800 for a cleaner crop
- **Zoom in** on clicks so viewers can follow along (macOS: use Accessibility Zoom, or Loom's zoom feature)
- **Fast-forward** the codespace build (30–60s of loading) rather than cutting it out — it sets honest expectations
- **No webcam needed** for v1 — screen + narration is enough
- Add captions in Loom or iMovie for accessibility

## Where to embed on the platform

The video URL can be added to [apps/web/src/pages/landing.tsx](../apps/web/src/pages/landing.tsx) or the module-viewer as an `<iframe>` or `<video>` embed in a "How it works" section.

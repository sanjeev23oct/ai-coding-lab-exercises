# Lab Vibe-901: Build a Personal Dashboard

> **Vibe Coding Trail · Intermediate · ~30 min · 200 XP**

---

> ## ⚡ Claude Code
>
> Already installed and signed in — no setup needed. Just run `claude`.

---

## The Vibe

You're building a personal dashboard for yourself — the thing you'd have open in a browser tab all day.

**No spec. No wireframe. No starter code.**

You have a description. Claude Code builds it. You iterate until it feels right.

---

## What You're Building

> *"A clean personal dashboard — a live clock showing the current time, an inspirational quote that changes every day, and a simple task list where I can add and tick off tasks. Dark background, minimal design, feels calm and focused."*

That's the whole brief. One paragraph. Everything else comes from conversation with Claude Code.

---

## Step 1 — Start Claude Code

```bash
claude
```

Paste the vibe description above as your first message. Don't add anything else yet — let Claude Code make its first pass.

---

## Step 2 — Ask It to Build

A good opening prompt:

```
Build me a personal dashboard based on this description:

"A clean personal dashboard — a live clock showing the current time, an
inspirational quote that changes every day, and a simple task list where
I can add and tick off tasks. Dark background, minimal design, feels calm
and focused."

Make it a single index.html file with embedded CSS and JS. No frameworks,
no build steps — just a file I can open in a browser.
```

Claude Code will create `index.html`. Once it's done, preview it:

```bash
npx serve . -l 3000
```

**To view it:** look at your browser's address bar right now — it's the URL for this lab, something like `https://sandbox.ai-coding.guru/cc-lab/session/<id>/?t=<id>`. Copy it into a new tab and insert `proxy/3000/` right before the `?t=`, so it reads `.../cc-lab/session/<id>/proxy/3000/?t=<id>`. That's your live preview — refresh it after each change.

---

## Step 3 — Iterate on Vibes

This is the core skill. Look at what Claude Code built and give it feedback in plain English — not code instructions.

**Visual feel:**
```
The clock is too small and the font feels techy. Make it bigger and use a
softer, more human font — something like Georgia or a system serif.
```

**Functionality:**
```
The quote is hardcoded. I want it to pick one randomly from a list of
10 quotes you choose — something motivational but not cheesy.
```

**Task list:**
```
When I tick off a task it should show a strikethrough and go slightly grey.
Add a small trash icon next to each task to delete it.
Also save the tasks to localStorage so they survive a page refresh.
```

**Overall polish:**
```
The layout feels crowded. Give the clock more breathing room at the top,
make the sections feel more distinct, and add a very subtle gradient
behind the whole page — dark navy to dark charcoal.
```

Each of these is one Claude Code message. Read the result. Give the next piece of feedback.

---

## Step 4 — Push One Thing Further

Pick one feature and go deeper than the default. Some ideas:

- **Clock:** Add a greeting that changes based on time of day ("Good morning", "Good afternoon", "Good evening")
- **Quotes:** Make it fetch from a real quotes API instead of a hardcoded list
- **Tasks:** Add priority levels (low / medium / high) with colour coding
- **Design:** Add a subtle animated background — particles, gentle gradient shift, or a noise texture

Ask Claude Code to implement whichever excites you:
```
Add a time-of-day greeting above the clock — "Good morning", "Good afternoon",
or "Good evening" depending on the hour. Use a slightly smaller, lighter font
than the clock.
```

---

## Done When

Your dashboard:
- [ ] Shows a live clock that ticks in real time
- [ ] Displays a quote (static or rotating)
- [ ] Has a working task list (add + complete tasks)
- [ ] Runs at `http://localhost:3000`
- [ ] Feels like something you'd actually use

There's no automated test. Open it, use it, and decide if it's done.

---

## Troubleshooting

**`npx serve` not found**
```bash
npm install -g serve
serve . -l 3000
```

**Changes not showing in browser**
Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows/Linux)

**Claude Code changed something you liked**
Tell it: *"You removed the gradient background I liked. Put it back — the page background should be a dark navy-to-charcoal gradient."*

**Tasks disappear on refresh**
Tell it: *"Save the task list to localStorage so it persists across page refreshes."*

---

## What You Just Practised

The vibe coding loop:
```
Vibe description → First build → Visual feedback → Iterate → Polish
```

You didn't write a spec. You didn't plan components. You described what you wanted, reacted to what you got, and converged on something real. That's the skill.

---

## Up Next

[Lab Vibe-902 — Prototype a SaaS Landing Page](https://ai-coding.guru)

Same loop, different challenge: build a complete landing page for a product from a 2-sentence description. Faster, more visual, higher stakes.

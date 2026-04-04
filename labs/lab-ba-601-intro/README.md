# Lab BA-601: Your First BA Session with Claude Code

**Track:** Claude Code for BAs · **Module:** Intro to Claude Code
**Difficulty:** Beginner · **Time:** ~25 min · **Reward:** 150 pts

---

## Mission Brief

You've just been handed a codebase you've never seen before: **Bookshop API** — a small Express REST API. The dev team wants a one-page architecture summary to share with stakeholders before the next sprint.

Your job: **use Claude Code to understand the codebase and produce a clear, non-technical summary.** You won't write any code. You'll ask questions, read what Claude produces, and iterate until you have something you could hand to a non-technical stakeholder.

---

## The Codebase

You're working with **Bookshop API** — an Express REST API for managing a bookshop's inventory and orders. It lives in the `src/` folder.

---

## Start Claude Code

Open a terminal and run:

```bash
claude
```

---

## Step 1 — Get the Big Picture

Ask Claude Code to orient you:

```
Read the src/ folder and explain what this API does. Give me a plain-English summary — what it manages, what the main endpoints are, and how the code is organised.
```

Read the response. You should understand:
- What the API does
- What data it manages
- How the routes are structured

---

## Step 2 — Dig into the Architecture

Ask follow-up questions:

```
How is the code organised? Walk me through the folder structure and explain the responsibility of each layer.
```

Then:

```
Are there any notable design decisions or patterns worth flagging for a stakeholder? For example: authentication, error handling, data storage.
```

---

## Step 3 — Produce the Summary

Ask Claude Code to write the one-pager:

```
Write a one-page architecture summary for a non-technical stakeholder. Include: what the system does, how it's structured, key capabilities, and any notable technical decisions. Use plain English — no jargon.
```

Review what it produces. Ask for revisions if needed:

```
Make it shorter. The stakeholder only has 2 minutes. Focus on what it does and why it matters.
```

---

## Step 4 — Save the Output

```
Save that summary to ARCHITECTURE-SUMMARY.md
```

---

## Done When

You have an `ARCHITECTURE-SUMMARY.md` that a non-technical stakeholder could read and understand in under 2 minutes.

---

## What You Just Learned

You used Claude Code as a **codebase translator** — turning raw source code into stakeholder-ready documentation without reading every line yourself.

---

## Up Next

Head back to [ai-coding.guru](https://ai-coding.guru) for the next module.

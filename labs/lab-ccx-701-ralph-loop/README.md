# Lab CCX-701: The Ralph Loop

**Track:** Claude Code Complete · **Module:** The Ralph Loop — Autonomous Feature Building
**Difficulty:** Advanced · **Time:** ~30 min · **Points:** 250

---

## What You'll Do

Trigger a single prompt. Walk away. Come back to a committed, tested feature.

You have a working Notes API with three features waiting in `BACKLOG.md`. Your job is to set up the loop, fire it, and verify the result — not write any code yourself.

---

## The Project

```
src/
  app.js            — Express app
  routes/notes.js   — CRUD endpoints for /notes
  data/store.js     — In-memory store
tests/
  notes.test.js     — Integration tests (all passing)
BACKLOG.md          — 3 features waiting to be built
CLAUDE.md           — Loop instructions for Claude
```

Start the server: `npm start` · Run tests: `npm test`

First, verify the baseline:

```bash
npm test
```

All tests should pass. If they don't, something is wrong — stop and fix it before continuing.

---

## Step 1: Read Before You Run

Open `BACKLOG.md` and `CLAUDE.md`. Read both fully.

- `BACKLOG.md` has three tasks in TODO. Each has precise acceptance criteria — this is what makes the loop reliable.
- `CLAUDE.md` has the loop rules: write tests first, only commit on green, update the backlog.

You don't need to change either file. They're already set up correctly.

---

## Step 2: Launch Claude Code in acceptEdits Mode

```bash
claude --permission-mode acceptEdits
```

`acceptEdits` lets Claude edit files freely but still asks before running shell commands. This is the right mode for a watched loop where you want to see the `npm test` calls.

---

## Step 3: Trigger the Loop

Copy and paste this prompt exactly:

```
Read BACKLOG.md and CLAUDE.md.
Pick the first TODO item and move it to IN PROGRESS.
Write failing tests for it first, then run npm test to confirm they fail.
Implement the feature to make the tests pass.
Only commit when npm test shows zero failures.
After committing, move the task to DONE in BACKLOG.md.
Do not ask me for anything — use your best judgement.
```

Then sit back and watch.

---

## What to Observe

As Claude works, pay attention to:

1. **Does it read CLAUDE.md and BACKLOG.md first?** It should orient itself before touching code.
2. **Does it write tests before implementing?** Watch for a test write followed by a failing `npm test` run.
3. **How many iterations does it take?** First implementation rarely passes 100% — watch how Claude handles failures.
4. **Does it commit only when green?** The commit should happen after a clean `npm test`.
5. **Does it update BACKLOG.md?** The task should move from IN PROGRESS → DONE.

---

## Step 4: Verify the Result

When Claude finishes, check:

```bash
npm test
```

All original tests plus the new feature's tests should pass.

```bash
git log --oneline -3
```

You should see at least one new commit with a `feat:` prefix.

```bash
cat BACKLOG.md
```

The completed task should be in DONE.

---

## Step 5 (Optional): Run It Again

Clear the session and run the loop on the second backlog item:

```
/clear
```

Then trigger the loop again with the same prompt. Claude will pick the next TODO item.

Each time the loop runs on a clean session, it picks the next task from TODO. This is how teams use it: backlog in, commits out.

---

## Done When

- [ ] `npm test` passes with the new feature's tests included
- [ ] `git log` shows a new `feat:` commit
- [ ] `BACKLOG.md` shows the first TODO item in DONE
- [ ] You observed Claude write failing tests before implementing

---

## Reflection

The Ralph Loop only works because three things are in place: **precise backlog tasks**, **tests as a quality gate**, and **CLAUDE.md loop rules**. Remove any one of them and the loop breaks.

- No acceptance criteria → Claude guesses what "done" means
- No tests → Claude has no quality gate, commits whatever it built
- No CLAUDE.md rules → Claude doesn't know your commit format, may ask questions, may not update the backlog

The reliability of the loop is a direct function of how well you set up the project, not how good the AI is.

Head back to [ai-coding.guru](https://ai-coding.guru) to continue.

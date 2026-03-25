# Lab CCX-201: Explore → Plan → Implement

**Track:** Claude Code Complete · **Module:** The Explore → Plan → Implement → Commit Workflow
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

## Mission Brief

You have a small Express.js API with a feature request: add pagination support to the `GET /api/tasks` endpoint. The codebase has multiple files and some existing tests.

**Your goal:** Use the full 4-phase workflow — explore first, produce a written plan, then implement.

---

## The Project

```
src/
  app.js           — Express app setup
  routes/
    tasks.js       — Task CRUD routes
  middleware/
    validate.js    — Request validation
  data/
    store.js       — In-memory data store
tests/
  tasks.test.js    — Integration tests
package.json
```

Start the server: `npm start` · Run tests: `npm test`

---

## Phase 1: Explore

Start Claude Code and **enter Plan Mode** (press **Shift+Tab** twice until you see "Plan Mode" in the footer):

```bash
claude
```

Press **Shift+Tab** → **Shift+Tab** until the footer shows `[Plan Mode]`.

Then ask:

```
Explore the codebase. Understand how the tasks route works, what the data store looks like, and how tests are structured. Do not write any code yet.
```

Claude Code will read the files and summarise. Read the output — make sure you understand the architecture before moving to planning.

---

## Phase 2: Plan

Still in Plan Mode, ask:

```
I want to add cursor-based pagination to GET /api/tasks. The endpoint should accept ?limit=N&cursor=ID parameters. Plan the implementation: what files change, what the new response shape looks like, and what tests are needed.
```

Claude Code will produce a written plan. Review it. If something looks wrong, say:

```
That approach won't work because [reason]. Revise the plan to [alternative].
```

Iterate until the plan is solid.

---

## Phase 3: Implement

Exit Plan Mode by pressing **Shift+Tab** once more (back to Normal Mode). Then say:

```
Implement the plan. Make all the changes we discussed.
```

Claude Code will implement. Watch which files it touches.

---

## Phase 4: Verify

Exit Claude Code and run the tests:

```bash
npm test
```

If any tests fail, go back into Claude Code and report what's failing:

```
These tests are failing: [paste output]. Fix them without changing the test expectations.
```

---

## Verification Criteria

Your implementation is complete when:

- [ ] `GET /api/tasks?limit=3` returns 3 tasks and a `nextCursor` field
- [ ] `GET /api/tasks?cursor=<id>&limit=3` returns the next page
- [ ] `GET /api/tasks` (no params) still returns all tasks
- [ ] `npm test` passes

---

## Commit

```
Commit all changes with a message: "feat: add cursor-based pagination to GET /api/tasks"
```

---

## Reflection

What's the difference between Plan Mode and Normal Mode? Why does it matter to separate exploration from implementation?

The key insight: **Plan Mode burns context exploring the codebase without writing code.** You get a written plan you can review and correct before touching any files. This prevents Claude Code from going in a wrong direction for 30 minutes before you see it.

Head back to [ai-coding.guru](https://ai-coding.guru) to continue.

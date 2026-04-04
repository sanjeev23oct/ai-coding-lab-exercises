# Lab CCX-202: Write a Real CLAUDE.md

**Track:** Claude Code Complete · **Module:** CLAUDE.md — Persistent Project Memory
**Difficulty:** Beginner · **Time:** ~25 min · **Points:** 150

---

---

## What You'll Build

A complete `CLAUDE.md` for a Node.js REST API, plus a path-scoped rule file for the routes directory. By the end, Claude Code will understand the project conventions without you explaining them.

---

## The Project

```
src/
  app.js                  — Express setup
  routes/
    tasks.js              — Task CRUD (kebab-case URLs, { data: result } response shape)
    users.js              — User routes
  middleware/
    auth.js               — API key auth (header: x-api-key: dev-key-123)
  db/
    store.js              — In-memory store
tests/
  tasks.test.js
package.json
```

Run: `npm start` · Test: `npm test`

---

## Task 1 — Observe Claude Code Without CLAUDE.md

```bash
cd /workspaces/ai-coding-lab-exercises/labs/lab-ccx-202-claude-md
claude
```

Ask:

```
What does this project do? How do I run it? What API key do I use for testing?
```

Notice that Claude Code has to read multiple files to answer. **This is the problem CLAUDE.md solves.**

---

## Task 2 — Use `/init` to Generate a Starting Point

Exit Claude Code, then run:

```bash
claude /init
```

Or start Claude Code and run:

```
/init
```

Claude Code analyses the project and generates a `CLAUDE.md`. Review what it wrote. It gets the basics right but misses important conventions.

---

## Task 3 — Improve the CLAUDE.md

Open `CLAUDE.md` and add or improve these sections:

**1. API Conventions** (add this section):
```markdown
## API Conventions
- URL paths use kebab-case: /api/user-profiles not /api/userProfiles
- All responses use { data: result } shape (never raw arrays)
- Errors use { error: "message" } shape with appropriate HTTP status
- Auth: all /api/* routes require header x-api-key: dev-key-123
- Test API key: dev-key-123
```

**2. What NOT to do** (add this):
```markdown
## Don't
- Don't modify the in-memory store shape in src/db/store.js
- Don't change auth logic in src/middleware/auth.js
- Don't return raw arrays — always wrap in { data: [...] }
```

Keep the file under 80 lines total.

---

## Task 4 — Add a Path-Scoped Rule

Create `.claude/rules/routes.md`:

```bash
mkdir -p .claude/rules
```

The file should have:

```markdown
---
paths:
  - "src/routes/**/*.js"
---

# Route Conventions

All route handlers follow this pattern:
1. Validate input → return 400 { error: string } on failure
2. Auth is applied via middleware — do not re-check in routes
3. Return data in { data: result } shape
4. Use 404 for not-found, 422 for validation, 500 for server errors
5. Kebab-case URL params: /api/user-tasks not /api/userTasks
```

This rule only loads when Claude Code is editing files in `src/routes/` — zero context overhead otherwise.

---

## Task 5 — Verify CLAUDE.md Works

Restart Claude Code to pick up the new file:

```bash
claude
```

Ask without reading any files:

```
Without reading any files: what does this project do, how do I start it, what API key do I use, and what response shape do all endpoints return?
```

Claude Code should answer entirely from CLAUDE.md. If it reads files to answer, your CLAUDE.md needs more detail.

---

## Task 6 — Test Convention Enforcement

Ask Claude Code to add a new endpoint:

```
Add a GET /api/tasks/stats endpoint that returns { total, done, pending } counts.
```

Check the implementation:
- Does it use `{ data: result }` response shape?
- Does it follow the existing error patterns?
- Did it respect the convention rules you wrote?

Run: `npm test`

---

## Done When

- [ ] `CLAUDE.md` exists with API conventions and "Don't" section
- [ ] `.claude/rules/routes.md` exists with path scope `src/routes/**/*.js`
- [ ] Claude Code can answer project questions without reading files (Task 5 passes)
- [ ] New stats endpoint added with correct response shape
- [ ] `npm test` passes

Head back to [ai-coding.guru](https://ai-coding.guru) to continue.

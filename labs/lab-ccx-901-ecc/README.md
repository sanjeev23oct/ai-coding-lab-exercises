# Lab CCX-901: Everything Claude Code — Install, Customise, Use

**Track:** Claude Code Complete · **Module:** Everything Claude Code
**Difficulty:** Intermediate · **Time:** ~35 min · **Points:** 200

---

## What You'll Do

ECC is a library — you pick what you need. In this lab you'll:

1. **Use the pre-installed `code-reviewer` agent** to find real issues in this codebase
2. **Use the `tdd` skill** to add a feature, watching RED → GREEN
3. **Run `continuous-learning`** at the end to save what you discovered as named instincts

---

## The Project

A Products API with CRUD endpoints and 12 passing tests.

Start by verifying the baseline:

```bash
npm install && npm test
```

All 12 tests should pass.

---

## Step 1: Run a Code Review

The `code-reviewer` agent from ECC is already installed in `.claude/agents/`. It focuses on correctness, security, performance, and maintainability.

Start Claude Code, then:

```
Use the code-reviewer agent to review src/routes/products.js and src/data/store.js
```

Observe:
- Claude delegates to the `code-reviewer` subagent (you'll see it activate)
- The agent reads the files and produces a structured report with severities
- It should find at least **2 real issues** in the current code

Note what it finds. You'll fix one of them in the next step.

---

## Step 2: Fix an Issue with TDD

The code-reviewer likely flagged missing input validation on `POST /products`. Let's fix it using the TDD skill.

```
Use the tdd skill to add input validation to POST /products.

Requirements:
- name is required (string, non-empty)
- price is required (number, greater than 0)
- Invalid requests return 400 with { error: "..." }

Follow red-green-refactor. Write the failing test first and show me npm test output before writing any implementation.
```

Watch Claude:
1. Write the failing test → run `npm test` → show RED output
2. Implement validation → run `npm test` → show GREEN
3. Refactor if needed → confirm still green

If Claude writes implementation before running the failing test, stop it:

```
Stop. Show me the failing test output first.
```

---

## Step 3: Add a New Feature with TDD

Now use TDD to add a new endpoint:

```
Use the tdd skill to add GET /products/search?q=<keyword>

Requirements:
- Returns products where name contains the query string (case-insensitive)
- Returns { data: [] } when no matches
- Returns 400 if q is missing or empty

Follow strict red-green-refactor.
```

---

## Step 4: Run Continuous Learning

At the end of the session, extract what was learned:

```
Run the continuous-learning skill to save instincts from this session.
```

Claude should:
- Review the changes made (git diff / changed files)
- Identify 2–3 patterns worth keeping
- Write them to `.claude/instincts/` as markdown files

Check `.claude/instincts/` afterwards — these are reusable patterns Claude will apply in future sessions on this project.

---

## What to Observe

The difference between ECC and raw Claude Code:

| Without ECC | With ECC |
|-------------|----------|
| Code review = ad-hoc | Code review = structured agent with checklist |
| TDD = might skip RED | TDD = Iron Law enforced by skill |
| Session knowledge lost | Continuous learning saves instincts |

ECC isn't magic — it's discipline encoded as configuration.

---

## Done When

- [ ] `npm test` passes (12 original + new validation + search tests)
- [ ] code-reviewer found at least 2 issues in the original code
- [ ] You observed RED before GREEN in the TDD cycle
- [ ] `.claude/instincts/` contains at least one instinct file

---

Head back to [ai-coding.guru](https://ai-coding.guru) to continue.

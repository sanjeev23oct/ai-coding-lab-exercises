# Lab CCX-102: Your First Coding Task

**Track:** Claude Code Complete · **Module:** Your First Coding Task
**Difficulty:** Beginner · **Time:** ~20 min · **Points:** 150

---

---

## Mission Brief

You've inherited a simple utility library. It has 4 functions with bugs or missing implementations, and tests that are all failing. Your job: **use Claude Code to understand the code, fix the bugs, add the missing implementation, and commit the result.**

The rule: **you direct, Claude Code implements.** Don't write code manually.

---

## The Project

```
src/
  utils.js       — 4 utility functions (2 buggy, 1 stub, 1 missing)
tests/
  utils.test.js  — 8 tests, all failing
package.json
```

---

## Step 0 — Check the Starting Point

```bash
cd /workspaces/ai-coding-lab-exercises/labs/lab-ccx-102-first-task
npm test
```

You'll see **8 failing tests**. That's your baseline.

---

## Step 1 — Orient Claude Code

Start Claude Code:

```bash
claude
```

Ask it to understand the project:

```
Read src/utils.js and tests/utils.test.js. Tell me what each function is supposed to do, what's wrong with the ones that are broken, and what's missing.
```

Read the response. Make sure you understand what needs to be fixed before proceeding.

---

## Step 2 — Fix the Bugs

Ask Claude Code to fix each bug, one at a time:

```
Fix the reverseString function so it passes its tests.
```

Then exit and verify:

```bash
npm test
```

Back in Claude Code:

```
Fix the sumArray function so it passes its tests.
```

Run tests again after each fix.

---

## Step 3 — Implement the Missing Function

```
Implement the isPalindrome function. It should return true if the string reads the same forwards and backwards, ignoring spaces and capitalisation.
```

Verify:

```bash
npm test
```

---

## Step 4 — Add a New Function

```
Add a function called truncate(str, maxLength) that shortens a string to maxLength characters and appends "..." if it was truncated. Add tests for it in utils.test.js.
```

After Claude Code writes the code and tests:

```bash
npm test
```

All tests should pass, including the new ones.

---

## Step 5 — Commit Your Work

```
Create a git commit with a meaningful message describing what was fixed and added.
```

Claude Code will stage the relevant files and commit. Check the result:

```bash
git log --oneline -5
```

---

## Done When

- [ ] All 8 original tests pass
- [ ] `truncate` function added with tests
- [ ] `npm test` shows 0 failing
- [ ] A git commit exists with your changes

---

## What You Just Learned

You completed the full **Read → Understand → Direct → Verify → Commit** loop. This is the pattern you'll use for every real task:

1. Orient Claude Code with the codebase
2. Give specific, one-task-at-a-time instructions
3. Verify with tests after each change
4. Commit working code

Head back to [ai-coding.guru](https://ai-coding.guru) to continue.

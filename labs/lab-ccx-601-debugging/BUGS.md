# Broken Setup — Symptoms

This Claude Code configuration has 5 bugs. Each one causes a specific symptom listed below. Your job is to diagnose and fix each one.

**Do not read SOLUTIONS.md until you've attempted all 5.**

---

## Bug 1: Wrong Package Manager

**Symptom:** When you ask Claude Code to install a package, it uses `npm install` even though the project should use `pnpm`.

Reproduce: Start Claude Code and ask `Install the lodash package`.

---

## Bug 2: Silent Hook

**Symptom:** The auto-lint hook should run `npx eslint` after editing `.js` files, but nothing happens when Claude Code edits a file.

Reproduce: Ask Claude Code to make a small change to `src/index.js`. No lint output appears.

---

## Bug 3: Amnesia After Compact

**Symptom:** After running `/compact`, Claude Code stops adding JSDoc comments to functions, even though you told it to at the start of the session.

Reproduce: Tell Claude Code `Always add JSDoc comments to every function you write`. Run `/compact`. Ask it to add a new function — no JSDoc.

---

## Bug 4: Inconsistent Indentation

**Symptom:** Claude Code sometimes indents with 2 spaces and sometimes with 4 spaces. It seems to pick randomly.

Reproduce: Ask Claude Code to write two different functions. Compare indentation.

---

## Bug 5: Runaway Context

**Symptom:** Even simple questions use far more tokens than expected. The status line shows context climbing fast.

Reproduce: Run `/context` and look at what's loaded. Something is pulling in a lot of content that shouldn't be.

---
name: tdd
description: Test-driven development skill. Enforces strict red-green-refactor cycle. Use for ALL new features and bug fixes.
---

# TDD Skill — Red-Green-Refactor

## The Iron Law

**NO PRODUCTION CODE WITHOUT A FAILING TEST FIRST.**

This is non-negotiable. If you write implementation before seeing a RED test, you have not done TDD. You have written code and then written tests that happen to pass — which proves nothing.

## The Cycle

### Phase 1: RED
1. Write the test for the new behaviour
2. Run `npm test`
3. Confirm the test FAILS — show the failure output
4. Do not proceed until you have seen the failure

### Phase 2: GREEN
1. Write the **simplest possible** implementation to make the test pass
2. No extras. No refactoring. Just pass the test.
3. Run `npm test`
4. Confirm ALL tests pass — show the output

### Phase 3: REFACTOR (if needed)
1. Clean up the implementation if it's messy
2. Run `npm test` again — must still be GREEN
3. If not green, revert the refactor

## Rules
- One failing test at a time — do not write multiple failing tests before implementing
- Never skip RED — if you can't make the test fail, the test is wrong
- Simple green first — premature elegance causes bugs
- Commit after each green cycle

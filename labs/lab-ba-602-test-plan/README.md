# Lab BA-602: Generate a QA Test Plan with Claude Code

**Track:** Claude Code for BAs · **Module:** Test Plans
**Difficulty:** Beginner · **Time:** ~30 min · **Reward:** 150 pts

---

## Mission Brief

The dev team is about to ship a new feature: **bulk order import via CSV**. Before it goes to QA, you need a test plan — happy paths, edge cases, and regression checks.

You don't have a spec yet. You have the existing codebase. Your job: **use Claude Code to understand the orders functionality and generate a comprehensive QA test plan.**

---

## The Codebase

You're working with **Bookshop API** — an Express REST API. Orders are managed in `src/routes/`. Study how they work, then build your test plan.

---

## Start Claude Code

Open a terminal and run:

```bash
claude
```

---

## Step 1 — Understand the Existing Orders Behaviour

```
Read src/routes/ and explain how orders work in this API. What can you create, read, update, or delete? What validations exist?
```

---

## Step 2 — Define the Feature Scope

Tell Claude Code about the new feature:

```
We're adding a new endpoint: POST /orders/import — it accepts a CSV file with columns: book_id, quantity, customer_email. Generate a test plan for this endpoint.
```

---

## Step 3 — Expand the Test Plan

Ask Claude to make it thorough:

```
Add edge cases: missing columns, invalid book_id, zero quantity, malformed email, empty file, file over 10MB. For each case, specify the expected HTTP status code and response body.
```

Then add regression coverage:

```
Add a regression section: list the existing order endpoints that could be affected by this change and what to verify for each.
```

---

## Step 4 — Format for Your Team

```
Format this as a Markdown test plan with sections: Overview, Happy Path Tests, Edge Case Tests, Regression Tests. Each test should have: Test ID, Description, Input, Expected Result.
```

Save it:

```
Save the test plan to TEST-PLAN-orders-import.md
```

---

## Done When

You have a `TEST-PLAN-orders-import.md` with at least 10 test cases covering happy paths, edge cases, and regression.

---

## What You Just Learned

You used Claude Code to **generate test coverage from a codebase + feature description** — without writing a single line of code or waiting for a developer to explain the system to you.

---

## Up Next

Head back to [ai-coding.guru](https://ai-coding.guru) for the next module.

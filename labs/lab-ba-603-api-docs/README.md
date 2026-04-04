# Lab BA-603: Document an API with Claude Code

**Track:** Claude Code for BAs · **Module:** API Documentation
**Difficulty:** Beginner · **Time:** ~30 min · **Reward:** 150 pts

---

## Mission Brief

A partner company needs to integrate with your Bookshop API. They've asked for an API reference document — endpoints, parameters, request/response examples — ready to share.

Your job: **use Claude Code to read the codebase and generate a complete, partner-ready API reference.** No developer needed.

---

## The Codebase

You're working with **Bookshop API** — an Express REST API in `src/`. Your output will be an API reference Markdown document.

---

## Start Claude Code

Open a terminal and run:

```bash
claude
```

---

## Step 1 — Inventory the Endpoints

```
Read all files in src/routes/ and list every API endpoint: method, path, and a one-line description of what it does.
```

---

## Step 2 — Document Each Endpoint

Work through the endpoints one group at a time:

```
For each endpoint in src/routes/, document: HTTP method, URL, query parameters, request body (if any), success response with example JSON, and error responses with status codes.
```

---

## Step 3 — Add an Introduction

```
Write an introduction section for the API reference: what the API does, the base URL, authentication (if any), and common response formats.
```

---

## Step 4 — Format and Save

```
Combine the introduction and all endpoint documentation into a single Markdown API reference. Use ## headings for each endpoint group, and ``` code blocks for all JSON examples. Save it to API-REFERENCE.md
```

---

## Step 5 — Partner-Proof It

Review the output, then ask:

```
Review the API reference and flag anything that would confuse an external developer who has never seen this codebase. Suggest improvements.
```

Apply any improvements, then save the final version.

---

## Done When

You have an `API-REFERENCE.md` that covers all endpoints with request/response examples — something you could email to a partner today.

---

## What You Just Learned

You turned raw source code into **partner-ready API documentation** in under 30 minutes — a task that would normally require a developer or hours of manual reading.

---

## Up Next

Head back to [ai-coding.guru](https://ai-coding.guru) for the next module.

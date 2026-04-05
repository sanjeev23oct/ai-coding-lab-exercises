# Notes API

## Stack
Node.js 20, Express 4, in-memory store (`src/data/store.js`), Node.js built-in test runner

## Project Structure
```
src/
  app.js          — Express app, exports app for tests
  routes/notes.js — All /notes endpoints
  data/store.js   — In-memory store (getAll, getById, create, update, remove, _reset)
tests/
  notes.test.js   — Integration tests
BACKLOG.md        — Feature backlog (TODO / IN PROGRESS / DONE)
```

## Commands
- Run tests: `npm test`
- Start server: `npm start`

## Conventions
- All endpoints return `{ data: <result> }` on success or `{ error: <message> }` on failure
- HTTP status codes: 200 OK, 201 Created, 204 No Content, 400 Bad Request, 404 Not Found
- IDs are integers, auto-incremented from 1
- Do NOT install new npm packages — use Node.js built-ins and existing dependencies only

## Ralph Loop Rules
1. Read BACKLOG.md and pick the first item in TODO
2. Move it to IN PROGRESS in BACKLOG.md before starting
3. Write failing tests in `tests/notes.test.js` FIRST — run `npm test` to confirm they fail
4. Implement the feature to make the tests pass
5. Run `npm test` — only commit when ALL tests pass (zero failures)
6. Commit with format: `feat: <short description>`
7. Move the completed task to DONE in BACKLOG.md and commit that too
8. Do not ask the user for clarification — make a reasonable decision and note it in the commit message

# Products API

## Stack
Node.js 20, Express 4, in-memory store, Node.js built-in test runner

## Project Structure
```
src/
  app.js              — Express app, exports for tests
  routes/products.js  — All /products endpoints
  data/store.js       — In-memory store
tests/
  products.test.js    — 12 passing integration tests
.claude/agents/
  code-reviewer.md    — Systematic code review (from ECC)
.claude/skills/
  tdd/                — TDD skill (red-green-refactor)
  continuous-learning/ — Extract session instincts
```

## Commands
- Run tests: `npm test`
- Start server: `npm start`

## Conventions
- All responses: `{ data: <result> }` on success, `{ error: <message> }` on failure
- Status codes: 200, 201, 204, 400, 404
- Do NOT install new packages

## Agents Available
- `code-reviewer` — use this for ALL code reviews. Invoke: "Use the code-reviewer agent to review src/routes/products.js"

## Skills Available
- `tdd` — use this for ALL new features. No exceptions.
- `continuous-learning` — run at the end of a productive session to save instincts

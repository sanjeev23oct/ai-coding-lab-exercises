# Lab CCX-401: Create a Code-Reviewer Agent

**Track:** Claude Code Complete · **Module:** Sub-Agents — Delegate to Specialists
**Difficulty:** Advanced · **Time:** ~30 min · **Points:** 200

---

---

## What You'll Build

A specialised `code-reviewer` sub-agent that:
- Has read-only tool access (can't accidentally modify files)
- Focuses on security, performance, and correctness
- Reports issues with file paths, line numbers, and severity ratings

---

## The Project

```
src/
  auth.js       — Authentication logic with intentional issues
  db.js         — Database helpers with a few problems
  api.js        — Express routes
tests/
  auth.test.js
package.json
```

---

## Step 1: Create the Agent

```bash
mkdir -p .claude/agents
```

Create `.claude/agents/code-reviewer.md`:

```markdown
---
name: code-reviewer
description: Senior code reviewer. Checks security, performance, and correctness. Use before merging.
tools: Read,Grep,Glob
disallowedTools: Write,Edit,Bash
model: claude-sonnet-4-6
---

You are a senior engineer acting as a code reviewer. Review the provided code for:

1. **Security** (Critical/High): injection risks, auth bypasses, exposed secrets, insecure patterns
2. **Performance** (High/Medium): N+1 queries, blocking operations, unnecessary loops, memory leaks
3. **Correctness** (High/Medium): edge cases, null handling, off-by-one errors, incorrect logic
4. **Code Quality** (Medium/Low): naming, error handling, missing validation

For each issue:
- Quote the specific code
- Explain the risk
- Suggest the fix
- Rate severity: Critical / High / Medium / Low

If no issues found in a category, say "None found."
End with a summary: X critical, Y high, Z medium, W low issues.
```

---

## Step 2: Verify the Agent is Available

```bash
claude
```

Run:

```
/agents
```

You should see `code-reviewer` in the list.

---

## Step 3: Review a File

Ask Claude Code to use your agent:

```
Use the @code-reviewer agent to review src/auth.js
```

The agent will:
1. Read `src/auth.js` using its `Read` tool (read-only — it can't modify files)
2. Analyse for security, performance, correctness
3. Return a structured review

**Expected output:** The auth.js file has several intentional issues — your reviewer should find at least 3.

---

## Step 4: Review Multiple Files

```
Use the @code-reviewer agent to review all files in src/
```

The agent uses `Glob` to find files, then reads and analyses each one.

---

## Step 5: Verify Tool Restrictions

Try to make the reviewer edit something:

```
Ask the @code-reviewer agent to fix the issues it found in src/auth.js
```

The agent should respond that it cannot edit files — it only has `Read`, `Grep`, and `Glob` tools. This is the correct behaviour.

---

## Step 6: Create a DB Specialist Agent

Create `.claude/agents/db-specialist.md`:

```markdown
---
name: db-specialist
description: Database expert. Use for query review, migration review, and index strategy.
tools: Read,Grep,Glob
model: claude-sonnet-4-6
---

You are a senior database engineer. Review code for:
- N+1 query risks (queries inside loops)
- Missing indexes on foreign keys and filtered columns
- Unsafe migrations (no rollback, locks tables)
- Inefficient queries (SELECT *, unnecessary JOINs)

Always check: does every query have appropriate error handling?
```

Test it:

```
Use the @db-specialist agent to review src/db.js
```

---

## Done When

- [ ] `.claude/agents/code-reviewer.md` created with read-only tools
- [ ] `/agents` lists `code-reviewer`
- [ ] Agent finds at least 3 issues in `src/auth.js`
- [ ] Agent refuses to edit files (tool restriction works)
- [ ] `.claude/agents/db-specialist.md` created

Head back to [ai-coding.guru](https://ai-coding.guru) to continue.

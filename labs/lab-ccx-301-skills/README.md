# Lab CCX-301: Build Your Skills Library

**Track:** Claude Code Complete · **Module:** Skills — Building Your Command Library
**Difficulty:** Intermediate · **Time:** ~35 min · **Points:** 250

---

---

## What You'll Build

Three skills (slash commands) that a developer team uses every day:
1. `/standup` — generates a standup from recent git activity
2. `/security-audit` — audits recently changed files for OWASP issues
3. `/changelog` — generates a CHANGELOG entry from commits

---

## Setup

```bash
mkdir -p .claude/skills/standup .claude/skills/security-audit .claude/skills/changelog
```

---

## Skill 1: `/standup`

Create `.claude/skills/standup/SKILL.md`:

```markdown
---
name: standup
description: Generate a standup update from recent git activity
---

Generate a standup update based on recent commits.

Recent commits (last 24 hours):
!`git log --oneline --since="24 hours ago" --format="- %s (%h)"`

All recent commits (last 3 days):
!`git log --oneline --since="3 days ago" --format="- %s (%h)"`

Format as:
**Yesterday:** (what was done)
**Today:** (what is planned — infer from open work)
**Blockers:** None (or list any)

Keep it under 6 bullet points total. Be concise.
```

**Test it:**

```bash
claude /standup
```

You should get a standup summary based on the git history of this repository.

---

## Skill 2: `/security-audit`

Create `.claude/skills/security-audit/SKILL.md`:

```markdown
---
name: security-audit
description: Audit recently changed files for OWASP Top 10 issues
allowed-tools: Read,Grep,Glob
---

Files changed in the last commit:
!`git diff --name-only HEAD~1 HEAD 2>/dev/null || git ls-files`

Audit these files for:
1. SQL injection (string concatenation in queries)
2. XSS (unescaped output to HTML)
3. Exposed secrets (hardcoded API keys, passwords, tokens)
4. Auth bypasses (missing auth checks)
5. Insecure deserialization
6. Missing input validation

Report each issue with:
- File path and line number
- Issue type and severity (Critical / High / Medium / Low)
- What the risk is
- How to fix it

If no issues found, say "No issues found" with a brief explanation of what was checked.
```

**Test it:**

```bash
claude /security-audit
```

---

## Skill 3: `/changelog`

Create `.claude/skills/changelog/SKILL.md`:

```markdown
---
name: changelog
description: Generate a CHANGELOG entry from recent commits
---

Recent commits since last tag:
!`git log --oneline $(git describe --tags --abbrev=0 2>/dev/null || echo "HEAD~10")..HEAD 2>/dev/null || git log --oneline -10`

Generate a CHANGELOG entry following Keep a Changelog format (https://keepachangelog.com).
Today's date: !`date +%Y-%m-%d`

Group changes under: Added, Changed, Fixed, Removed.
Only include meaningful changes (skip chore/refactor unless significant).
```

**Test it:**

```bash
claude /changelog
```

---

## Verification

Run each skill and verify:

- [ ] `/standup` produces a standup with Yesterday/Today/Blockers sections
- [ ] `/security-audit` scans files and reports issues (or "No issues found")
- [ ] `/changelog` generates a formatted CHANGELOG entry

---

## Stretch Goal: Parameterised Skill

Create `.claude/skills/explain/SKILL.md`:

```markdown
---
name: explain
description: Explain what a file does. Usage: /explain src/app.js
---

Explain this file clearly for a developer new to the codebase:

File: $ARGUMENTS

Read the file, then explain:
1. What it does (2 sentences max)
2. Key functions/classes and what they do
3. How it connects to other parts of the codebase
4. Any gotchas or non-obvious behaviour
```

Test it:

```bash
claude /explain src/app.js
```

---

## Done When

- [ ] `.claude/skills/standup/SKILL.md` exists and `/standup` produces output
- [ ] `.claude/skills/security-audit/SKILL.md` exists and `/security-audit` scans files
- [ ] `.claude/skills/changelog/SKILL.md` exists and `/changelog` generates output

Head back to [ai-coding.guru](https://ai-coding.guru) to continue.

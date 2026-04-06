---
name: continuous-learning
description: Extract reusable patterns and instincts from the current session. Run at the end of any productive session to build up persistent project knowledge.
---

# Continuous Learning Skill

## What This Does

After a coding session, you've accumulated project knowledge that would otherwise evaporate. This skill extracts that knowledge as named "instincts" — reusable patterns Claude can apply in future sessions.

## When to Run

Run at the end of any session where you:
- Debugged a non-obvious issue
- Made a design decision with a clear reason
- Fixed a recurring pattern of mistakes
- Learned something specific about this codebase

## Process

1. Review what was done in the session (read recent git log, scan changed files)
2. Identify patterns worth keeping:
   - Mistakes that were made and corrected
   - Decisions that had clear rationale
   - Conventions that should be followed consistently
   - Edge cases that tripped up the implementation
3. Write each instinct to `.claude/instincts/` as a markdown file

## Instinct Format

```markdown
---
name: <short-slug>
learned: <date>
---

# <Instinct Title>

**Pattern**: What to do (or not do)
**Why**: The reason this matters in this project
**Example**: Concrete code example or scenario
```

## Output

At the end, summarise:
- How many instincts were saved
- The most important one and why
- What to watch for in the next session

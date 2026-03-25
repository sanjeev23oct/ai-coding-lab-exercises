# Solutions

**Read this only after attempting all 5 bugs.**

---

## Bug 1: Wrong Package Manager

**Root cause:** `CLAUDE.md` says "use pnpm" but the instruction is too vague. "Use pnpm" gets interpreted as a preference, not a hard rule.

**Fix:** Change the instruction to be explicit and specific:

```markdown
## Package Manager
ALWAYS use pnpm, never npm or yarn.
- Install: `pnpm install` (not `npm install`)
- Add package: `pnpm add <pkg>` (not `npm install <pkg>`)
- Run scripts: `pnpm run <script>` (not `npm run <script>`)
```

Specific instructions are followed more reliably than vague ones.

---

## Bug 2: Silent Hook

**Root cause:** The hook in `.claude/settings.json` has the wrong matcher. It uses `"matcher": "*.js"` (glob pattern) instead of `"matcher": ".*\\.js$"` (regex pattern).

Hook matchers use **regex**, not glob syntax.

**Fix:**
```json
{
  "matcher": ".*\\.js$"
}
```

Also verify the hook script path is absolute and the script is executable (`chmod +x`).

---

## Bug 3: Amnesia After Compact

**Root cause:** The "always add JSDoc" instruction was given verbally in the conversation. `/compact` summarises conversation history — instructions not in a persistent file get lost.

**Fix:** Add to `CLAUDE.md`:

```markdown
## Code Style
- Always add JSDoc comments to every function:
  ```js
  /**
   * @param {string} name
   * @returns {string}
   */
  ```
```

Rules must be in `CLAUDE.md` (or `.claude/rules/`) to survive `/compact`. `CLAUDE.md` is re-read from disk after every compact.

---

## Bug 4: Inconsistent Indentation

**Root cause:** `CLAUDE.md` says "use 2-space indentation" but `.claude/rules/style.md` says "use 4-space indentation". Two conflicting rules — Claude picks arbitrarily.

**Fix:** Remove the rule from one file. The project `CLAUDE.md` should be the single source of truth for code style. Delete the conflicting line from `.claude/rules/style.md`.

Run `/memory` to see all loaded files and check for conflicts.

---

## Bug 5: Runaway Context

**Root cause:** `CLAUDE.md` contains `@docs/*.md` which imports every file in the `docs/` directory — including a large architecture document that's 800 lines.

**Fix:** Replace the wildcard import with specific imports:

```markdown
@docs/api-reference.md
```

Or better: move the frequently-referenced content into a path-scoped rule so it only loads when working with relevant files.

The general rule: path-scoped rules (`paths:` in frontmatter) load on demand. Wildcard `@imports` in CLAUDE.md always load.

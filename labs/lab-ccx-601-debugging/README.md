# Lab CCX-601: Debug a Broken Setup

**Track:** Claude Code Complete · **Module:** Debugging Claude Code
**Difficulty:** Advanced · **Time:** ~30 min · **Points:** 150

---

> ## ⚡ Claude Code Setup — One-Time Only
>
> Claude Code is pre-configured automatically via your **LAB_TOKEN** Codespace secret.
>
> **First time?** Do this once:
> 1. Go to **[ai-coding.guru/settings](https://ai-coding.guru/settings) → API Keys** and copy your Lab Token
> 2. Add it at **[github.com/settings/codespaces](https://github.com/settings/codespaces)** — secret name: `LAB_TOKEN`, set **Repository access → sanjeev23oct/ai-coding-lab-exercises**
> 3. Rebuild this Codespace
> 4. In the terminal, run: `bash /workspaces/ai-coding-lab-exercises/scripts/setup-claude.sh`
>
> **Already set up?** Re-run: `bash /workspaces/ai-coding-lab-exercises/scripts/setup-claude.sh`

---

## Mission Brief

This project's Claude Code setup is intentionally broken in 5 ways. Your job: diagnose each issue and fix it. The `BUGS.md` file lists the symptoms — you figure out the causes and apply the fixes.

**No cheating:** Read `BUGS.md` (symptoms only). Don't read `SOLUTIONS.md` until you've attempted each fix. The point is to practice systematic debugging.

---

## Read First

```bash
cat BUGS.md
```

Then start Claude Code and try to work on the project. You'll encounter the bugs as you use it.

---

## Debugging Tools

```
/doctor         — diagnose installation and auth issues
/memory         — see what files are loaded
/debug          — inspect current session state
```

```bash
claude --debug "hooks"    # see hook execution
claude --debug "api"      # see API calls
```

---

## Bug 1: CLAUDE.md Not Being Followed

**Symptom:** Claude Code uses `npm` even though the rules say to use `pnpm`.

**Debugging steps:**
1. Run `/memory` — is CLAUDE.md listed?
2. If listed: is the instruction specific enough?
3. Run `/context` — is the CLAUDE.md so long the rule is buried?

Fix it without looking at SOLUTIONS.md.

---

## Bug 2: Hook Silently Failing

**Symptom:** The auto-lint hook should run after editing `.js` files, but nothing happens.

**Debugging steps:**
1. Check `.claude/settings.json` — is the hook configured?
2. Check the matcher — does it match `.js` files?
3. Run with `claude --debug "hooks"` — does the hook appear?
4. Check the hook script exists and is executable

---

## Bug 3: Instructions Lost After `/compact`

**Symptom:** After running `/compact`, Claude Code stops following the "always add JSDoc comments" rule.

**Debugging steps:**
1. Was this rule in CLAUDE.md or only in the conversation?
2. `/compact` summarises conversation — rules only in conversation are lost
3. Fix: add the rule to CLAUDE.md (or `.claude/rules/`)

---

## Bug 4: Conflicting Rules

**Symptom:** Sometimes Claude Code uses 2-space indentation, sometimes 4-space.

**Debugging steps:**
1. Run `/memory` — how many files are loaded?
2. Read all loaded instruction files — do any contradict each other?
3. Look for indentation rules in CLAUDE.md and in `.claude/rules/`

---

## Bug 5: Expensive Session

**Symptom:** Simple tasks are consuming far more tokens than expected.

**Debugging steps:**
1. Run `/context` — what's consuming context?
2. Is there a wildcard in the CLAUDE.md `@import` that's pulling in too much?
3. Are path-scoped rules not working (loading always instead of on demand)?

---

## Verification

After fixing each bug, verify:

- [ ] Bug 1: Claude Code uses `pnpm` when asked to install packages
- [ ] Bug 2: `claude --debug "hooks"` shows the hook firing after a `.js` edit
- [ ] Bug 3: After `/compact`, the JSDoc rule is still followed (it's now in CLAUDE.md)
- [ ] Bug 4: All files agree on 2-space indentation
- [ ] Bug 5: Context usage is reasonable for simple tasks

---

## Compare with Solutions

After you've fixed (or attempted) all 5 bugs:

```bash
cat SOLUTIONS.md
```

See how your fixes compare to the intended solutions.

Head back to [ai-coding.guru](https://ai-coding.guru) to continue.

# Devcontainer Standards — AI Coding Lab Exercises

Reference for anyone adding or maintaining lab devcontainers in this repo.

---

## Template

Copy from `labs/lab-cc-101-first-session/.devcontainer/devcontainer.json` when creating a new lab.

---

## Required Fields

Every CC lab devcontainer must have **all** of the following:

### 1. `extensions` — both must be present
```json
"extensions": [
  "anthropic.claude-code",
  "RooVeterinaryInc.roo-cline",
  "dbaeumer.vscode-eslint",
  "esbenp.prettier-vscode"
]
```
> Extension IDs are case-sensitive. `anthropic.claude-code` (not `anthropics.claude-code`).

### 2. `settings` — Roo Code must point to the lab proxy
```json
"settings": {
  "terminal.integrated.defaultProfile.linux": "bash",
  "roo-cline.apiProvider": "anthropic",
  "roo-cline.apiModelId": "claude-sonnet-4-6",
  "roo-cline.anthropicBaseUrl": "https://litellm-anthropic-proxy-production.up.railway.app"
}
```

### 3. `postCreateCommand` — installs Claude Code and skips onboarding wizard
```bash
npm install && npm install -g @anthropic-ai/claude-code && echo 'export ANTHROPIC_API_KEY=lab-ai-coding-2026' >> ~/.bashrc && echo 'export ANTHROPIC_BASE_URL=https://litellm-anthropic-proxy-production.up.railway.app' >> ~/.bashrc && echo '{"hasCompletedOnboarding":true,"numStartups":3,"installMethod":"global","oauthAccount":null,"primaryApiKey":"lab-ai-coding-2026"}' > ~/.claude.json
```

> **Do NOT** add `code --install-extension` here. The VS Code server isn't ready during `postCreateCommand`, and the command will fail (red X in the terminal). Extensions are handled by `customizations.vscode.extensions`.

### 4. `remoteEnv` — injects env vars into the shell
```json
"remoteEnv": {
  "ANTHROPIC_BASE_URL": "https://litellm-anthropic-proxy-production.up.railway.app",
  "ANTHROPIC_API_KEY": "lab-ai-coding-2026"
}
```

### 5. `openFiles` — must be a full workspace-relative path
```json
"codespaces": {
  "openFiles": ["labs/lab-cc-XXX-slug/README.md"]
}
```
> The workspace root in a Codespace is `/workspaces/ai-coding-lab-exercises/`. The path in `openFiles` is relative to that root — **not** relative to the devcontainer.json file.
>
> ✅ Correct: `"labs/lab-cc-102-navigating-codebases/README.md"`
> ❌ Wrong: `"README.md"` (opens the repo root README)

### 6. `forwardPorts`
```json
"forwardPorts": [3000]
```

---

## Full Example

```json
{
  "name": "Lab CC-102: Navigating Codebases",
  "image": "mcr.microsoft.com/devcontainers/javascript-node:22",

  "postCreateCommand": "npm install && npm install -g @anthropic-ai/claude-code && echo 'export ANTHROPIC_API_KEY=lab-ai-coding-2026' >> ~/.bashrc && echo 'export ANTHROPIC_BASE_URL=https://litellm-anthropic-proxy-production.up.railway.app' >> ~/.bashrc && echo '{\"hasCompletedOnboarding\":true,\"numStartups\":3,\"installMethod\":\"global\",\"oauthAccount\":null,\"primaryApiKey\":\"lab-ai-coding-2026\"}' > ~/.claude.json",

  "remoteEnv": {
    "ANTHROPIC_BASE_URL": "https://litellm-anthropic-proxy-production.up.railway.app",
    "ANTHROPIC_API_KEY": "lab-ai-coding-2026"
  },

  "customizations": {
    "vscode": {
      "extensions": [
        "anthropic.claude-code",
        "RooVeterinaryInc.roo-cline",
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode"
      ],
      "settings": {
        "terminal.integrated.defaultProfile.linux": "bash",
        "roo-cline.apiProvider": "anthropic",
        "roo-cline.apiModelId": "claude-sonnet-4-6",
        "roo-cline.anthropicBaseUrl": "https://litellm-anthropic-proxy-production.up.railway.app"
      }
    },
    "codespaces": {
      "openFiles": ["labs/lab-cc-102-navigating-codebases/README.md"]
    }
  },

  "forwardPorts": [3000]
}
```

---

## Common Mistakes

| Mistake | Effect | Fix |
|---------|--------|-----|
| `anthropics.claude-code` (extra 's') | Extension not found | Use `anthropic.claude-code` |
| `openFiles: ["README.md"]` | Opens repo root README | Use full path: `labs/lab-cc-XXX/README.md` |
| `code --install-extension` in postCreateCommand | Red X / postCreate fails | Remove it — extensions install via `customizations` |
| Missing `remoteEnv` | `claude` has no API key | Add `ANTHROPIC_API_KEY` and `ANTHROPIC_BASE_URL` |
| Missing Roo Code settings | Roo Code uses wrong provider | Add `roo-cline.*` settings block |

---

## Testing a New Devcontainer

1. Push your changes to `main`
2. Go to GitHub → Code → Codespaces → New codespace with options
3. Select the lab's devcontainer path under "Dev container configuration"
4. After the Codespace opens, verify:
   - No red X in the terminal setup output
   - `claude --version` works in a new terminal
   - Claude Code tab appears in the top-right VS Code panel
   - Roo Code (🦘) icon appears in the left sidebar
   - The lab-specific README opens automatically in the editor

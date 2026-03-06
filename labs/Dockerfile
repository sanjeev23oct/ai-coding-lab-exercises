FROM mcr.microsoft.com/devcontainers/javascript-node:22
# Pre-bake Claude Code so Codespace creation pulls a cached layer (~15-30s) instead of installing at runtime (~2-3 min)
RUN npm install -g @anthropic-ai/claude-code

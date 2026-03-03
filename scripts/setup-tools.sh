#!/bin/bash
# ============================================================
#  AI Coding Lab — Tool Setup Script
#  Runs once when the Codespace is first created
# ============================================================

echo "🔧 Setting up AI Coding Lab environment..."

# Install lab 101 dependencies
if [ -d "/workspaces/ai-coding-lab-exercises/labs/lab-101-hello-ai/starter" ]; then
    cd /workspaces/ai-coding-lab-exercises/labs/lab-101-hello-ai/starter
    npm install 2>/dev/null
    echo "  ✅ Lab 101 dependencies installed"
fi

# Verify tools (try reinstalling if missing)
if ! command -v gemini &> /dev/null; then
    echo "  📦 Installing Gemini CLI..."
    npm install -g @google/gemini-cli 2>/dev/null || true
fi

if ! command -v claude &> /dev/null; then
    echo "  📦 Installing Claude Code..."
    npm install -g @anthropic-ai/claude-code 2>/dev/null || true
fi

if ! command -v codex &> /dev/null; then
    echo "  📦 Installing Codex CLI..."
    npm install -g @openai/codex 2>/dev/null || true
fi

if ! command -v aider &> /dev/null; then
    echo "  📦 Installing Aider..."
    python3 -m pip install --break-system-packages aider-chat 2>/dev/null || true
fi

echo "✅ Setup complete!"

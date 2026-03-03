#!/bin/bash
# ============================================================
#  🧪 AI Coding Lab — Welcome
# ============================================================

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
RED='\033[0;31m'
BOLD='\033[1m'
NC='\033[0m' # No Color

echo ""
echo -e "${CYAN}╔══════════════════════════════════════════════════════════╗${NC}"
echo -e "${CYAN}║                                                          ║${NC}"
echo -e "${CYAN}║   ${BOLD}🧪 Welcome to AI Coding Lab!${NC}${CYAN}                           ║${NC}"
echo -e "${CYAN}║   ${NC}Learn AI-assisted coding by doing.${CYAN}                    ║${NC}"
echo -e "${CYAN}║                                                          ║${NC}"
echo -e "${CYAN}╚══════════════════════════════════════════════════════════╝${NC}"
echo ""

# ---- Check which tools are available ----
echo -e "${BOLD}🛠  Available AI Coding Tools:${NC}"
echo ""

# Gemini CLI
if command -v gemini &> /dev/null; then
    echo -e "  ${GREEN}✅ Gemini CLI${NC}        — Google's AI coding assistant"
else
    echo -e "  ${RED}❌ Gemini CLI${NC}        — Not installed"
fi

# Claude Code
if command -v claude &> /dev/null; then
    echo -e "  ${GREEN}✅ Claude Code${NC}       — Anthropic's AI coding agent"
else
    echo -e "  ${RED}❌ Claude Code${NC}       — Not installed"
fi

# Codex CLI
if command -v codex &> /dev/null; then
    echo -e "  ${GREEN}✅ Codex CLI${NC}         — OpenAI's coding agent"
else
    echo -e "  ${RED}❌ Codex CLI${NC}         — Not installed"
fi

# Aider
if command -v aider &> /dev/null; then
    echo -e "  ${GREEN}✅ Aider${NC}             — Open-source AI pair programmer (works with Groq, DeepSeek, etc.)"
else
    echo -e "  ${RED}❌ Aider${NC}             — Not installed"
fi

echo ""

# ---- Check for API keys ----
echo -e "${BOLD}🔑 API Key Status:${NC}"
echo ""

if [ -n "$GOOGLE_API_KEY" ] || [ -n "$GEMINI_API_KEY" ]; then
    echo -e "  ${GREEN}✅ Gemini${NC}            — API key configured"
else
    echo -e "  ${YELLOW}⚠️  Gemini${NC}            — No API key (set GOOGLE_API_KEY or run: gemini auth login)"
fi

if [ -n "$ANTHROPIC_API_KEY" ]; then
    echo -e "  ${GREEN}✅ Claude Code${NC}       — API key configured"
else
    echo -e "  ${YELLOW}⚠️  Claude Code${NC}       — No API key (set ANTHROPIC_API_KEY)"
fi

if [ -n "$OPENAI_API_KEY" ]; then
    echo -e "  ${GREEN}✅ OpenAI (Codex)${NC}    — API key configured"
else
    echo -e "  ${YELLOW}⚠️  OpenAI (Codex)${NC}    — No API key (set OPENAI_API_KEY)"
fi

if [ -n "$GROQ_API_KEY" ]; then
    echo -e "  ${GREEN}✅ Groq${NC}              — API key configured (use with Aider)"
else
    echo -e "  ${YELLOW}⚠️  Groq${NC}              — No API key (free at groq.com — use with Aider)"
fi

if [ -n "$DEEPSEEK_API_KEY" ]; then
    echo -e "  ${GREEN}✅ DeepSeek${NC}          — API key configured (use with Aider)"
else
    echo -e "  ${YELLOW}⚠️  DeepSeek${NC}          — No API key (cheap at platform.deepseek.com — use with Aider)"
fi

echo ""
echo -e "${CYAN}──────────────────────────────────────────────────────────${NC}"
echo ""
echo -e "${BOLD}🚀 Quick Start:${NC}"
echo ""
echo -e "  ${YELLOW}1.${NC} Start your first lab:"
echo -e "     ${CYAN}cd labs/lab-101-hello-ai/starter${NC}"
echo ""
echo -e "  ${YELLOW}2.${NC} Read the instructions:"
echo -e "     ${CYAN}cat ../README.md${NC}"
echo ""
echo -e "  ${YELLOW}3.${NC} Use an AI tool to complete the exercise:"
echo -e "     ${CYAN}gemini${NC}                                    # Free with Google account"
echo -e "     ${CYAN}claude${NC}                                    # Needs Anthropic API key"
echo -e "     ${CYAN}aider --model groq/llama-3.3-70b-versatile${NC} # Free with Groq key"
echo ""
echo -e "  ${YELLOW}4.${NC} Validate your solution:"
echo -e "     ${CYAN}bash ../validate.sh${NC}"
echo ""
echo -e "${CYAN}──────────────────────────────────────────────────────────${NC}"
echo ""

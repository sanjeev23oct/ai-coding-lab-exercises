#!/bin/bash
# ============================================================
#  AI Coding Lab — Lab 101 Validator
# ============================================================

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BOLD='\033[1m'
NC='\033[0m'

STARTER_DIR="$(dirname "$0")/starter"

echo ""
echo -e "${BOLD}🧪 Validating Lab 101: Your First AI Coding Conversation${NC}"
echo -e "──────────────────────────────────────────────────────────"
echo ""

# Run tests and capture output
cd "$STARTER_DIR" || { echo -e "${RED}❌ Cannot find starter directory${NC}"; exit 1; }

TEST_OUTPUT=$(npm test 2>&1)
TEST_EXIT=$?

if [ $TEST_EXIT -eq 0 ]; then
    echo -e "${GREEN}╔══════════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║                                          ║${NC}"
    echo -e "${GREEN}║   🎉  ALL TESTS PASSED!                 ║${NC}"
    echo -e "${GREEN}║                                          ║${NC}"
    echo -e "${GREEN}║   Lab 101 Complete — +200 XP             ║${NC}"
    echo -e "${GREEN}║                                          ║${NC}"
    echo -e "${GREEN}╚══════════════════════════════════════════╝${NC}"
    echo ""
    echo -e "${BOLD}What you learned:${NC}"
    echo "  ✅ How to describe coding tasks to an AI tool"
    echo "  ✅ How to iterate and refine AI output"
    echo "  ✅ How to validate AI-generated code with tests"
    echo ""
    echo -e "${YELLOW}Next: Try the same exercise with a different AI tool!${NC}"
    exit 0
else
    # Count pass/fail
    PASS_COUNT=$(echo "$TEST_OUTPUT" | grep -c "✔\|pass" || true)
    FAIL_COUNT=$(echo "$TEST_OUTPUT" | grep -c "✖\|fail" || true)
    
    echo -e "${RED}╔══════════════════════════════════════════╗${NC}"
    echo -e "${RED}║                                          ║${NC}"
    echo -e "${RED}║   ❌  SOME TESTS FAILING                 ║${NC}"
    echo -e "${RED}║                                          ║${NC}"
    echo -e "${RED}╚══════════════════════════════════════════╝${NC}"
    echo ""
    echo -e "${BOLD}Test output:${NC}"
    echo "$TEST_OUTPUT"
    echo ""
    echo -e "${YELLOW}💡 Tip: Share the failing test output with your AI tool${NC}"
    echo -e "${YELLOW}   and ask it to fix the issues.${NC}"
    exit 1
fi

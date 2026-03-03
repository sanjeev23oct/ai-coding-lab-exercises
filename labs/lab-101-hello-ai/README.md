# 🧪 Lab 101: Your First AI Coding Conversation

> **Difficulty**: Beginner | **Time**: 15–20 min | **Tools**: Any AI coding CLI

---

## 🎯 Objective

Use an AI coding tool to build a simple **string utility library** in Node.js. You'll have a conversation with AI to write code, then validate it passes the tests.

This lab teaches you the fundamentals of AI-assisted coding:
- How to describe what you want
- How to iterate on AI output
- How to validate AI-generated code

---

## 📋 What You'll Build

A Node.js module (`src/utils.js`) that exports these functions:

| Function | Description | Example |
|-|-|-|
| `capitalize(str)` | Capitalize the first letter of a string | `capitalize("hello")` → `"Hello"` |
| `reverseString(str)` | Reverse a string | `reverseString("hello")` → `"olleh"` |
| `countVowels(str)` | Count vowels in a string | `countVowels("hello")` → `2` |
| `isPalindrome(str)` | Check if a string is a palindrome (case-insensitive) | `isPalindrome("Racecar")` → `true` |
| `truncate(str, maxLen)` | Truncate string and add "..." if longer than maxLen | `truncate("hello world", 5)` → `"hello..."` |

---

## 🚀 Getting Started

### 1. Navigate to the starter project
```bash
cd labs/lab-101-hello-ai/starter
```

### 2. Look at what's there
```bash
ls src/         # You'll see utils.js — it's mostly empty!
cat src/utils.js
cat tests/utils.test.js   # The tests your code must pass
```

### 3. Run the tests (they'll fail — that's expected!)
```bash
npm test
```

You should see **0 passing, 12 failing**. Your job: use AI to make them all pass.

---

## 🤖 Use Your AI Tool

Pick whichever tool is available and ask it to implement the functions:

### Option A: Gemini CLI (Free)
```bash
gemini
# Then ask: "Look at tests/utils.test.js and implement all the functions 
# in src/utils.js to make the tests pass"
```

### Option B: Claude Code (Needs API key)
```bash
claude
# Then ask: "Read the test file tests/utils.test.js and implement all 
# functions in src/utils.js so all tests pass"
```

### Option C: Aider + Groq (Free)
```bash
aider --model groq/llama-3.3-70b-versatile src/utils.js
# Then ask: "Read tests/utils.test.js and implement all functions 
# in src/utils.js to make every test pass"
```

### Option D: Codex CLI (Needs API key)
```bash
codex
# Then ask: "Implement all functions in src/utils.js based on the 
# tests in tests/utils.test.js"
```

---

## ✅ Validate Your Solution

### Run the tests
```bash
npm test
```

**Success** = all 12 tests pass ✅

### Or use the validation script
```bash
bash ../validate.sh
```

---

## 💡 Tips

- **Be specific**: Tell the AI exactly which file to read and which file to edit
- **Reference the tests**: The tests define exactly what each function should do
- **Iterate**: If the first attempt isn't perfect, tell the AI what's wrong and ask it to fix it
- **Read the output**: Don't blindly accept — check that the code makes sense to you

---

## 🏁 Done?

Congratulations! You just used AI to write real, tested code. 🎉

**What to try next:**
- Try the same exercise with a different AI tool — notice the differences
- Try asking in different ways — how does prompt wording affect results?
- Look at the generated code — would you have written it the same way?

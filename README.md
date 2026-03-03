# 🧪 AI Coding Lab — Exercises

> **Learn AI-assisted coding by doing — hands-on labs with the tools you love.**

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/sanjeev23oct/ai-coding-lab-exercises?quickstart=1)

---

## 🚀 Get Started (Free!)

1. Click the **"Open in GitHub Codespaces"** button above
2. Wait ~3 minutes for setup (first time only)
3. Follow the instructions in the terminal

> **No install needed. No API keys needed. Everything is pre-configured.**
>
> GitHub gives every account **60 free hours/month** of Codespaces.

---

## 🛠 What's Inside the Sandbox

When the Codespace opens, you'll have a browser-based VS Code with these AI coding tools ready:

| Tool | Command | What It Does |
|-|-|-|
| **Gemini CLI** | `gemini` | Google's AI coding assistant (free) |
| **Aider** | `aider` | Open-source AI pair programmer (free with Groq) |
| **Claude Code** | `claude` | Anthropic's AI coding agent |
| **Codex CLI** | `codex` | OpenAI's coding agent |

---

## 📚 Available Labs

### Lab 101: Your First AI Coding Conversation 🌱
**Difficulty**: Beginner | **Time**: 15–20 min

Use an AI coding tool to implement 5 string utility functions that pass a pre-written test suite. Learn the basics of:
- Describing coding tasks to AI
- Iterating on AI-generated code
- Validating with tests

```bash
cd labs/lab-101-hello-ai/starter
cat ../README.md          # Read the instructions
npm test                   # See 12 failing tests
gemini                     # Ask AI to make them pass!
bash ../validate.sh        # Validate your solution ✅
```

*More labs coming soon!*

---

## 💡 Tips for Success

1. **Be specific** — Tell the AI exactly which files to read and edit
2. **Reference tests** — Point the AI to the test file so it knows what to implement
3. **Iterate** — If the first attempt isn't perfect, share the error and ask AI to fix it
4. **Read the code** — Don't blindly accept AI output; understand what it wrote
5. **Try different tools** — Each tool has different strengths; experiment!

---

## 🔧 Running Locally (Optional)

Prefer your own machine? No problem:

```bash
# Clone the repo
git clone https://github.com/sanjeev23oct/ai-coding-lab-exercises.git
cd ai-coding-lab-exercises

# Install your preferred AI tool
npm install -g @google/gemini-cli     # Free with Google account
# or: pip install aider-chat           # Free with Groq key

# Start a lab
cd labs/lab-101-hello-ai/starter
npm install
npm test                               # See failing tests
gemini                                 # Use AI to fix them
bash ../validate.sh                    # Check your solution
```

---

## 📁 Repo Structure

```
ai-coding-lab-exercises/
├── .devcontainer/              ← Codespaces sandbox config
│   ├── devcontainer.json       ← Environment + secrets
│   └── Dockerfile              ← Pre-installs AI tools
├── scripts/
│   ├── welcome.sh              ← Welcome screen
│   └── setup-tools.sh          ← Tool installer
└── labs/
    └── lab-101-hello-ai/       ← Your first lab
        ├── README.md           ← Instructions
        ├── validate.sh         ← Solution checker
        └── starter/
            ├── src/utils.js    ← Implement these!
            └── tests/          ← Tests to pass
```

---

## ❓ Need Help?

- Read the lab's README carefully before starting
- Check the test file to understand what's expected
- Ask your AI tool to explain errors if you're stuck
- Try a different AI tool if one isn't working well

---

*Built with ❤️ by [AI Coding Lab](https://github.com/sanjeev23oct) — Learn AI coding the right way.*

---
description: Synchronize and push local blog updates safely to GitHub
---

Follow these steps to safely push your local changes to the GitHub repository, taking into account the sandboxed agent environment constraints and potential upstream conflicts.

## 1. Review and Stage Changes
Review the current status of the repository to identify untracked or modified files that need to be committed.

// turbo
```bash
git status
```

*Action:* The AI agent will review the output and run `git add .` to stage the necessary files.

## 2. Commit the Updates
The agent will formulate a precise commit message based on the staged changes and execute the commit.

```bash
git commit -m "chore: synchronize blog updates"
```

## 3. Rebase With Remote (`origin/main`)
Always synchronize with the remote repository first. This is especially important if GitHub's background processes (e.g., Secret Scanning Bypass, Dependabot, or direct UI edits) have created new commits upstream that you do not have locally.

// turbo
```bash
git pull --rebase origin main
```

## 4. Manual Push Execution
**USER ACTION REQUIRED:** The AI Agent environment (`sandbox-exec`) intentionally lacks permission to access your macOS Keychain credentials. Therefore, the agent cannot push code directly on your behalf.

You must execute the final push manually in your host terminal window:

```bash
git push origin main
```

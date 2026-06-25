# Contributing to FPCA Tech Documentation

Thank you for contributing to our technical documentation! We use a structured, automated workflow to maintain high standards, consistent history, and automated releases.

## Prerequisites

- **Node.js**: Ensure you have a current LTS version installed.
- **Dependencies**: Run `npm install` after cloning to install all tools (Husky, Commitizen, etc.).

## Workflow

Follow this flow for every documentation task to ensure a clean, automated history.

### 1. Setup (First time only)
```bash
git clone <repo-url>
cd fpca-tech-documentation
npm install
```

### 2. Start a New Task
When making changes, please work on a descriptive feature branch. Use the following naming convention to keep our repository organized:

- `feat/name-of-feature` (e.g., `feat/new-setup-guide`)
- `fix/name-of-fix` (e.g., `fix/typo-in-readme`)
- `docs/name-of-doc` (e.g., `docs/infrastructure-notes`)
- `chore/name-of-task` (e.g., `chore/dependency-updates`)

```bash
git checkout -b <type>/your-descriptive-name
```

### 3. Automatic Formatting
We use **Prettier** to keep our Markdown files clean. **Husky** is configured to run formatting automatically every time you commit. If you want to format everything manually, run:

```bash
npm run clean
```

> **Note:** Your `husky` hooks will automatically run `npm run clean` to format your files before the commit is finalized.

### 4. Committing Changes
We enforce **Conventional Commits**. Because `npm run commit` is an interactive tool, you must stage your files before running it.

1. Stage your changes:
```bash
git add .
```

2. Run the commit tool:
```bash
npm run commit
```

This will launch an interactive UI that guides you through the process. Your commit will be automatically validated by commitlint. If your message format is incorrect, the commit will be rejected.

> **Note:** To review commit types, checkout the [Commit Types](#commit-types) section.

### 5. Merge to Main
Once you have pushed your branch to **GitHub**, create a **Pull Request** to merge it into `main`. Once merged, update your local environment:

```bash
git checkout main
git pull origin main
```

> **Note:** Only repository admins will be Merge PR's.

### 6. Ship the Release
From the main branch, run the following command to finalize your work. This script will automatically:

- Validate that you are on the main branch.
- Bump the version and update CHANGELOG.md.
- Create a Git tag.
- Push your commits and tags to the remote repository.

```bash
npm run ship
```

> **Note:** Only repository admins will be able to ship & release.

## Commit Types
When using `npm run commit`, please select the most appropriate type:

- `feat`: A new feature or documentation section.
- `fix`: A bug fix.
- `docs`: Documentation-only changes.
- `chore`: Maintenance, config changes, or dependency updates.
- `style`: Changes that do not affect content (formatting).
- `refactor`: Structural changes to documentation.
- `perf`: Performance improvements.
- `test`: Adding or correcting tests.
- `config`: Configuration file updates.

## Troubleshooting:
If a command fails, ensure you have run npm install and that you are currently on the main branch. If you are stuck on a feature branch, please create a Pull Request to main before running the ship command.

---
*For questions regarding this workflow, please contact the FPCA Tech Team.*
// check-branch.js
const { execSync } = require('child_process');
const branch = execSync('git branch --show-current').toString().trim();

if (branch !== 'main') {
  console.error(`\x1b[31m[ERROR] This command can only be run from the 'main' branch. You are on '${branch}'.\x1b[0m`);
  process.exit(1);
}
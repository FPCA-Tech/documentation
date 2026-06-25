// check-commit.js
const { execSync } = require('child_process');
const branch = execSync('git branch --show-current').toString().trim();

if (branch === 'main') {
  console.error(`\x1b[31m[ERROR] Direct commits to main are NOT allowed!\x1b[0m`);
  process.exit(1);
}
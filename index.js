const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const copydir = require("copy-dir");
const { ensureDirectoryExists, isGitRepository } = require("./lib");

const srcDir = process.argv[2];
const dstDir = process.argv[3];

ensureDirectoryExists(dstDir);

if (!isGitRepository(dstDir)) {
  execSync(`git init`, { cwd: dstDir });
  execSync(`git add .`, { cwd: dstDir });
  execSync(`git commit -m "Initial commit"`, { cwd: dstDir });
}

copydir.sync(srcDir, dstDir, {
  utimes: true,
  mode: true,
  cover: true
});

execSync(`git add .`, { cwd: dstDir });
execSync(`git commit -m "${new Date().toISOString()}"`, { cwd: dstDir });

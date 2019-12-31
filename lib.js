const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");

function ensureDirectoryExists(directoryPath) {
  if (!fs.existsSync(directoryPath)) {
    mkdirp.sync(directoryPath);
  }
}

function isDirectory(filepath) {
  return fs.statSync(filepath).isDirectory();
}

function isGitRepository(filepath) {
  const gitDirectoryPath = path.join(filepath, ".git");
  return fs.existsSync(gitDirectoryPath) && isDirectory(gitDirectoryPath);
}

module.exports = {
  ensureDirectoryExists,
  isGitRepository
};

const fs = require('fs');
const path = require('path');

const isGitRepository = async (filepath) => {
  const gitDirectoryPath = path.join(filepath, '.git');
  const directoryPathExists = fs.existsSync(gitDirectoryPath);

  if (!directoryPathExists) {
    return false;
  }

  const state = await fs.promises.stat(gitDirectoryPath);
  return state.isDirectory();
};

module.exports = isGitRepository;

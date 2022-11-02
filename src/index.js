const copydir = require('copy-dir');
const mkdirp = require('mkdirp');

const exec = require('./exec');
const isGitRepository = require('./isGitRepository');

const gitBackup = async (srcDir, dstDir) => {
  await mkdirp(dstDir);

  if (!isGitRepository(dstDir)) {
    exec(`git init`);
  }

  copydir.sync(srcDir, dstDir, {
    utimes: true,
    mode: true,
    cover: true,
  });

  exec('git add .', dstDir);
  exec(`git commit -m "${new Date().toISOString()}"`, dstDir);
};

module.exports = gitBackup;

const copydir = require('copy-dir');
const mkdirp = require('mkdirp');

const exec = require('./exec');
const isGitRepository = require('./isGitRepository');

const gitBackup = async (dstDir, srcDir) => {
  await mkdirp(dstDir);

  const isRepository = await isGitRepository(dstDir);

  if (!isRepository) {
    exec('git init');
  }

  if (typeof srcDir !== 'undefined') {
    copydir.sync(srcDir, dstDir, {
      utimes: true,
      mode: true,
      cover: true
    });
  }

  exec('git add .', dstDir);
  exec(`git commit -m "${new Date().toISOString()}"`, dstDir);
};

module.exports = gitBackup;

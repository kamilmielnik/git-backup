#!/usr/bin/env node

const gitBackup = require('../src');

const argv = Array.from(process.argv);
const args = argv.slice(2);
const [argSrcDir, argDstDir] = args;

const USAGE = 'Usage: git-backup <template> <path>';

if (typeof argSrcDir !== 'string') {
  throw new Error(USAGE);
}

if (typeof argDstDir !== 'string') {
  throw new Error(USAGE);
}

gitBackup(argSrcDir, argDstDir);

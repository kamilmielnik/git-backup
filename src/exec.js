const { execSync } = require('child_process');

const exec = (command, cwd) => {
  try {
    execSync(command, { cwd, shell: '/bin/bash' });
  } catch (error) {
    console.log(error.code);
    console.log(error.message);
    console.log(error.output.toString());
  }
};

module.exports = exec;

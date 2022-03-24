// General import
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const { stdout } = require('process');

/**
 * Gets all the file paths from the selected directory recursively.
 *
 * @param {string} directory Path to the directory from which to read the files.
 * @returns Array of file paths in the selected directory
 */
module.exports.getFilesRecursively = (directory) => {
  const files = [];

  const filesInDirectory = fs.readdirSync(directory);

  filesInDirectory.forEach((file) => {
    const absolute = path.join(directory, file);

    if (fs.lstatSync(absolute).isDirectory()) {
      files.push(...this.getFilesRecursively(absolute));
    } else {
      files.push(absolute);
    }
  });

  return files;
};

/**
 * Prints the information about starting the task and its completion to the console.
 *
 * @param {string} message Message to output before starting the process.
 * @param {Function} taskToRun Function to invoke.
 * @returns Value that the function returns
 */
module.exports.logProcess = (message, taskToRun) => {
  try {
    stdout.write(message);
    const valueToReturn = taskToRun();
    stdout.write(`${chalk.green(' DONE ✔')}\n`);

    return valueToReturn;
  } catch (error) {
    stdout.write(`${chalk.red(' ERROR X')}\n`);

    throw error;
  }
};

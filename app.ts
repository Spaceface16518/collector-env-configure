module.exports = function getArgArray(): string { // NOTE: The module.exports is for when the function becomes a module.
  let path: string[] = require('yargs').parse()._;
  if (path.length > 1) {
    console.warn('More than one path entered');
  }
  return path[0];
}

// console.log(getArgArray()) // NOTE: This is just for development. This is a module for exporting.
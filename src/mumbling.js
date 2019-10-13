#!/usr/bin/env node

const argv = require('yargs').argv;
const chalk = require('chalk');
// eslint-disable-next-line no-console
const log = console.log;

exports.mumbling = function (word) {
  return word.split('').map((letter, index) => (letter.toUpperCase() + letter.toLowerCase().repeat(index))).join('-');
};

if (argv.word) {
  log(chalk.green.bold(this.mumbling(argv.word)));
} else {
  log(chalk.red.bold('To ask the cat to mumble, you\'ve to add --word="abcd"'));
}
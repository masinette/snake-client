const net = require('net');
const connect = require('./client');

const stdin = process.stdin;
const name = "SNAKE";



console.log('Connecting ...');
connect();


/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */

//set ctrl + c as the exit key, to exit program in Node, and terminate the game
//this is the data callback handler for stdin
const handleUserInput = ('data', (key) => {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
});
//setup input from user
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
};

setupInput();
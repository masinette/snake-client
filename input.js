/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */

//set ctrl + c as the exit key, to exit program in Node, and terminate the game
//this is the data callback handler for stdin
let connection;

//setup input from user
const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  connection = conn;
  stdin.on('data', function handleUserInput(key) {
    // \u0003 maps to ctrl+c input
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      connection.write("Move: up");
    }
    if (key === 'a') {
      connection.write("Move: left");
    }
    if (key === 's') {
      connection.write("Move: down");
    }
    if (key === 'd') {
      connection.write("Move: right");
    }
    if (key === 'h') {
      connection.write("Say:  HEY U!");
    }
    if (key === 'g') {
      connection.write("Say:  BYE!");
    }  if (key === 'r') {
      connection.write("Say:  RUN!");
    }
  });

  return stdin;


};

module.exports = { setupInput };
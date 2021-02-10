const net = require('net');
const stdin = process.stdin;
const name = "TSK";

/**
 * Establishes connection with the game server
 */

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  //send the server a message with your name
  // conn.write(JSON.stringify({ name }));
  // stdin.on('data', (input) => {
  //   conn.write(JSON.stringify({ name, input }));
  // });


  //attaches an event handler to handle incoming data, and conlog it for the player
  conn.on('data', (data) => {
    let parsedData = JSON.parse(data);
    console.log("\x1b[34m", `${parsedData.name} Said: `, parsedData.input);
  });

  //send name to snake board upon connection
  conn.on('connect', (connect) => {
    // console.log("Successfully connected to game server");

    // conn.write(name);
    setInterval(() => {
      conn.write("Move: down");
    }, 50);

  });

  return conn;
};

/*
Vasily server
PORT: 50542
HOST: 135.23.222.131
*/

/*
"Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left)
*/

module.exports = connect;
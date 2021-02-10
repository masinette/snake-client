const net = require('net');
const stdin = process.stdin;
const name = "SNAKE";

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

  // conn.write(JSON.stringify({ name }));
  // stdin.on('data', (input) => {
  //   conn.write(JSON.stringify({ name, input }));
  // });

  conn.on('data', (data) => {
    let parsedData = JSON.parse(data);
    console.log("\x1b[34m", `${parsedData.name} Said: `, parsedData.input);
  });



  return conn;
};

console.log('Connecting ...');
connect();

// connect.conn.on('data', (data) => {
//   parsedData = JSON.parse(data);
//   console.log("\x1b[34m",`${parsedData.name} Said: `, parsedData.input);
// });

/*
Vasily server
PORT: 50542
HOST: 135.23.222.131
*/
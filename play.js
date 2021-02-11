const { connect } = require('./client');
const { setupInput } = require('./input');
const name = "SNAKE";

console.log('Connecting ...');
// connect();

setupInput(connect());
const net = require('net');
const { IP, PORT } = require('./constants');
/**
 * Establishes connection with the game server
 */

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  // actions on connection
  conn.on('connect', () => {
    console.log('GAME STARTED SNEK INBOUND!')
    console.log('NAME: LMB');
    console.log('Press t, y or u to talk, ya long bodied freak');
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);

  });
 

  return conn;
}

module.exports = { connect };
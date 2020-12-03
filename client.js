const net = require('net');

/**
 * Establishes connection with the game server
 */

const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  // actions on connection
  conn.on('connect', () => {
    console.log('GAME STARTED SNEK INBOUND!')
    console.log('NAME: LMB');
    // conn.write('Move: up');
    // conn.write('Move: down')
    // conn.write('Move: left');
    // conn.write('Move: down');



  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
 

  return conn;
}

module.exports = { connect };
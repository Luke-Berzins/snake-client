let connection; 

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = (key) => {
    if (key === 'w' || key === 'W') {
      conn.write('Move: up');
    }
    if (key === 's' || key === 'S') {
      conn.write('Move: down')
    }
    if (key === 'a' || key === 'A') {
      conn.write('Move: left');
    }
    if (key === 'd' || key === 'D') {
      conn.write('Move: right');
    }
    if (key === 't' || key === 'T') {
      conn.write('Say: out me way!');
    }
    if (key === 'Y' || key === 'y') {
      conn.write('Say: I AM A SNAKE WHO CARES BRO');
    }
    if (key === 'u' || key === 'U') {
      conn.write('Say: sneaky snek');
    }
    if (key === '\u0003') {
      process.exit();
    }
  }
  stdin.on('data', (key) => {
    handleUserInput(key);
  });

  return stdin;
}

module.exports = { setupInput };


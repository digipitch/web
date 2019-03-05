const express = require('express');
const http = require('http');

// Express app setup
const app = express();

const server = http.createServer(app);
server.listen(3000);
server.on('listening', () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port: 3000');
});

app.get('*', (req, res) => {
  res.end('Hello World!');
});

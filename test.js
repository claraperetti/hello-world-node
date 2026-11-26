const http = require('http');
const assert = require('assert');
const server = require('./index');

server.listen(0, () => {
  const { port } = server.address();
  http.get(`http://localhost:${port}`, (res) => {
    let body = '';
    res.on('data', (c) => (body += c));
    res.on('end', () => {
      assert.strictEqual(res.statusCode, 200);
      assert.strictEqual(body, 'Hello World!\n');
      console.log('Teste OK: resposta "Hello World!"');
      server.close();
    });
  });
});

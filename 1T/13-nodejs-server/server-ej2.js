/* Crear un servidor en NodeJS que devuelva una página web (puerto 3000) */

const http = require('http');
const fs = require('fs');
const index = fs.readFileSync('formulario.html');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(index);
}).listen(3000);



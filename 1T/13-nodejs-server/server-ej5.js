/*Devolver las páginas cargadas de un fichero .html en lugar de escritas en código.*/
const http = require('http');
const fs = require('fs');
const html = fs.readFileSync('formulario.html');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(html);
}).listen(3000);
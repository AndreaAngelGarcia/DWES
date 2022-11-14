/*Crear un servidor en NodeJS que tenga distintas páginas según la URL accedida.*/

const http = require('http');
const fs = require('fs');
const pagina1 = fs.readFileSync('enlaces.html');
const pagina2 = fs.readFileSync('horario.html');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  switch (req.url) {
    case "/page1":
        res.writeHead(200);
        res.end(pagina1);
        break;
    case "/page2":
        res.writeHead(200);
        res.end(pagina2);
        break;
    }
}).listen(3000);


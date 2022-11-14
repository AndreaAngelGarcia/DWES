/*Crear 2 rutas:
• /page: Devuelve una pagina web
• /error: Devuelve una pagina de error con el código 404*/

const http = require('http');
const fs = require('fs');
const pagina = fs.readFileSync('horario.html');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  switch (req.url) {
    case "/page":
        res.writeHead(200);
        res.end(pagina);
        break;
    case "/error":
        res.writeHead(404);
        res.end(`Not Found Error 404`);
        break;
    }
}).listen(4000);

/* Crear un servidor en NodeJS que devuelva Hello World! cuando se acceda al puerto 4000*/

const http = require('http');

const server = http.createServer((req, res) => {

res.end('Hello World!\n');
}).listen(4000);
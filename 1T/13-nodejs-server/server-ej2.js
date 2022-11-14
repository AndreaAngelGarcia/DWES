/* Crear un servidor en NodeJS que devuelva una página web (puerto 3000) */

const http = require('http');

http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    res.end('<!DOCTYPE HTML><html><head><meta charset="utf-8"><title>Ejercicios sobre listas 1a</title></head><body><h1>Listas ordenadas</h1><ol type="a" start="4"><li>Elemento 1</li><li>Elemento 2</li><li>Elemento 3</li><li>Elemento 4</li></ol><ol reversed start="100"><li>Elemento 1</li><li>Elemento 2</li><li>Elemento 3</li><li>Elemento 4</li></ol><ol type="i" start=999><li>Elemento 1</li><li>Elemento 2</li><li>Elemento 3</li><li>Elemento 4</li></ol></body></html>');
}).listen(3000);



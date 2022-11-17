/*Devolver las páginas cargadas de un fichero .html en lugar de escritas en código.*/

import express from 'express';
import * as fs from 'fs';

const pagina = fs.readFileSync('pagina1.html');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(pagina);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
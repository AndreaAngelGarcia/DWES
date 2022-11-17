/* Crear un servidor en NodeJS que tenga distintas páginas según la URL accedida.*/
import express from 'express';

const app = express();
const port = 3000;

app.get('/page1', (req, res) => {
  res.send('pagina 1');
});

app.get('/page2', (req, res) => {
    res.send('pagina 2');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
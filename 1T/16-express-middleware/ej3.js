/* Crear un servidor que muestre por consola todos los accesos a la API con morgan */
import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('tiny'));

app.get('/*', function (req, res) {
  res.send('Hola pequeño Morgan!')
});

app.listen(3000);
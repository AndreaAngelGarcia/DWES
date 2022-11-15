/*Crear un proyecto donde ejecutar todos los apartados de la sección Como empezar de la web
oficial de ExpressJS*/

import express from 'express';

const app = express();
const port = 3000;

app.use('/static', express.static('img'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/', function (req, res) {
    res.send('Got a POST request');
});

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user');
});

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user');
});

app.listen(3000, () => {
    console.log(`Example app listening on port ${port}`);
});
/* Realizar un middleware que valide el acceso a una zona restringida para usuarios admin. Para
ello, en la petición se enviará en la cabecera el parámetro password con el valor patata. En
caso contrario, o si no define se define el parámetro, no permitirá el acceso.
– Acceso correcto: Se enviará como respuesta el mensaje Bienvenid@, disfrute del
contenido, con el código 200 OK.

– Acceso incorrecto: Se enviará un objeto de error con el código 401 unauthorized y el men-
saje Acceso restringido, por favor, incluya la palabra secreta en el parámetro 'password' en la cabera de la petición */

import express from 'express';
import winston from 'winston';

const app = express();
const port = 3000;

const logConfiguration = {
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize({
            all: true
        }),
        winston.format.timestamp({
            format: 'MMM-DD-YYYY HH:mm:ss'
        }),
        winston.format.printf(info => `${[info.timestamp]}: ${info.level}: ${info.message}`),
    )
};

const logger = winston.createLogger(logConfiguration);

app.get('/admin', function (req, res, next) {
    res.status(401).send({
        code: 401, message: 'Acceso restringido, por favor, incluya la palabra secreta en el parámetro password en la cabera de la petición'
    });
    logger.error('ERROR 401');
});

app.get('/admin/password', function (req, res, next) {
    res.status(401).send({
        code: 401, message: 'Acceso restringido, por favor, incluya la palabra secreta en el parámetro password en la cabera de la petición'
    });
    logger.error('ERROR 401');
});

app.get('/admin/password/*', function (req, res, next) {
    res.status(401).send({
        code: 401, message: 'Acceso restringido, por favor, incluya la palabra secreta en el parámetro password en la cabera de la petición'
    });
    logger.error('ERROR 401');
});

app.get('/admin/password:secret', function (req, res, next) {
    if (req.params.secret === '=patata') next('route')
    else next()
}, function (req, res, next) {
    res.status(401).send({
        code: 401, message: 'Acceso restringido, por favor, incluya la palabra secreta en el parámetro password en la cabera de la petición'
    });
    logger.error('ERROR 401');
});

app.get('/admin/password:secret', function (req, res, next) {
    res.status(200);
    res.send('Bienvenid@, disfrute del contenido');
    logger.info('OK 200');
});

app.use('/', function (req, res, next) {
    res.send('Para acceder a admin, escriba /admin');
});

app.listen(port, () => {
    console.log(`Escuchando el puerto: http://localhost:${port}`)
});
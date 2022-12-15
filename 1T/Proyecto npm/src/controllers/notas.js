const readline = require('readline');
const fs = require('fs');

const { logger } = require('../utils');
const notasService = require('../services/notas');

const files = fs.readdirSync('./');
const arg = process.argv;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function recogerNotas(name, data) {
  const data = fs.readFileSync(data, 'utf8');
  const notas = notasService.recogerNotas();
  res.send(`${data}\n\n`);
}

function crearNotas(req, res) {
  const { name, data } = req.body;
  const notaCreada = notasService.crearNota(name, data);
  res.status(201).send(notaCreada);
}

function editarNotas(req, res) {
  // eslint-disable-next-line no-shadow
  const files = fs.readdirSync('./files');
  console.log(files);

  // eslint-disable-next-line no-undef
  rl.question('Introduzca la nota que quiera elegir:\n\n', x => {
    console.log('\nEl archivo elegido contiene la siguiente informacion:\n\n');

    try {
      const data = fs.readFileSync(x, 'utf8');
      console.log(`${data}\n\n`);
    } catch (err) {
      console.error(err);
    }

    rl.question('Introduzca el nuevo contenido:\n\n', y => {
      fs.writeFile(x, y, err => {
        if (err) throw err;
        console.log('Contenido editado!');
        console.log('\n\n');
        console.log('El nuevo contenido es:\n\n');

        try {
          const data = fs.readFileSync(x, 'utf8');
          console.log(`${data}\n\n`);
        } catch (error) {
          console.error(error);
        }
      });

      rl.close();
    });
  });
}

function eliminarNotas(req, res) {
  // eslint-disable-next-line no-shadow
  const files = fs.readdirSync('./');
  console.log(files);
  const { id } = req.params;
  const deletedNote = notasService.deleteNote(id);
  return res.status(200).send({ deletedNote });
}

module.exports = {
  crearNotas,
  editarNotas,
  eliminarNotas,
};

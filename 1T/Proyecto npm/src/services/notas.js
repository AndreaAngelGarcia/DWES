const fs = require('fs');

const notasUtils = require('../utils/notas');

function crearNota(name, data) {
  fs.writeFileSync(notasUtils.getPath(name), data);
  console.log(notasUtils.getPath(name));
}

function editarNota(name, data) {
  fs.writeFileSync(notasUtils.getPath(name), data);
}

function eliminarNota(name) {
  // fs.unlink(notasUtils.getPath(name));
  fs.unlink(notasUtils.getPath(name), err => {
    if (err) throw err;
  });
}

module.exports = {
  crearNota,
  editarNota,
  eliminarNota,
};

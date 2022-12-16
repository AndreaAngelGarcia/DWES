const fs = require('fs');
const notasService = require('../services/notas');

function recogerNotas(req, res) {
  const files = fs.readdirSync('./files');
  res.status(200).send(files);
}

function crearNota(req, res) {
  const { name, data } = req.body;
  const createdNote = notasService.crearNota(name, data);
  res.status(201).send(createdNote);
}

function editarNota(req, res) { // curl -X POST http://localhost:3000/users/:req.params?req.query=value -d "req.body" -H reqheaders
  const { name } = req.params;
  const { data } = req.body;
  const editedNote = notasService.editarNota(name, data);
  res.status(201).send(editedNote);
}

function eliminarNota(req, res) {
  const { name } = req.params;
  const deletedNote = notasService.eliminarNota(name);
  res.status(201).send(deletedNote);
}

module.exports = {
  recogerNotas,
  crearNota,
  editarNota,
  eliminarNota,
};

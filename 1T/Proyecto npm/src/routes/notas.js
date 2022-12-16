const express = require('express');

const { crearNota, editarNota, eliminarNota } = require('../controllers/notas');

const router = express.Router();

// router.get('/', recogerNotas);
// router.get('/:name', recogerNota);
router.post('/', crearNota);
router.put('/:name', editarNota);
router.delete('/:name', eliminarNota); // nota.note --> name == nota

module.exports = router;

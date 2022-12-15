const { application } = require('express');
const express = require('express');

const { crearNotas, editarNotas, eliminarNotas } = require('../controllers/notas');

const router = express.Router();

router.get('/', recogerNotas);
router.get('/:name', recogerNota);
router.post('/:name', crearNotas);
router.put('/:name', editarNotas);
router.delete('/:name', eliminarNotas); // nota.note --> name == nota

module.exports = router;

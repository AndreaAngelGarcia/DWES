const { application } = require('express');
const express = require('express');

const { crearNotas, editarNotas, eliminarNotas } = require('../controllers/notas');

const router = express.Router();

router.post('/notas', crearNotas);
router.put('/notas/:name', editarNotas);
router.delete('/notas/:name', eliminarNotas); // nota.note --> name Ç== nota

module.exports = router;

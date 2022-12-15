const express = require('express');

const { rootController } = require('../controllers');
const notasRouter = require('./notas');

const router = express.Router();

router.post('/', rootController);
router.use('/notas', notasRouter);

module.exports = router;

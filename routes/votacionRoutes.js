const express = require('express');
const router = express.Router();
const { registrarVoto, obtenerResultados } = require('../controllers/votacionController');

// Ruta para registrar un voto
router.post('/registrar', registrarVoto);

// Ruta para obtener los resultados de la votación
router.get('/resultados', obtenerResultados);

module.exports = router;

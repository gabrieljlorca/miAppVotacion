const express = require('express');
const router = express.Router();
const { registrarVoto, obtenerResultados, obtenerConteoVotos } = require('../controllers/votacionController');

// Ruta para registrar un voto
router.post('/registrar', registrarVoto);

// Ruta para obtener los resultados de la votación
router.get('/resultados', obtenerResultados);

// Ruta para obtener el conteo de votos
router.get('/conteoVotos', obtenerConteoVotos);

module.exports = router;

const express = require('express');
const router = express.Router();
const votacionController = require('../controllers/votacionController');

// TODO: Agregar middleware de autenticación aquí antes de obtener los votos.
// Ruta para obtener todos los votos
router.get('/votos', votacionController.obtenerVotos);

// TODO: Agregar middleware de autenticación aquí antes de permitir votar.
// Ruta para registrar un voto
router.post('/votar', votacionController.registrarVoto);

// Aquí puedes continuar agregando más rutas según las necesidades de tu aplicación.

module.exports = router;

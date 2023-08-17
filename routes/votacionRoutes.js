const express = require('express');
const router = express.Router();

// Importa el controlador de votación
const votacionController = require('../controllers/votacionController');

// Define las rutas para las operaciones CRUD
router.get('/votaciones', votacionController.getVotaciones);
router.post('/votaciones', votacionController.createVotacion);
router.get('/votaciones/:id', votacionController.getVotacion);
router.put('/votaciones/:id', votacionController.updateVotacion);
router.delete('/votaciones/:id', votacionController.deleteVotacion);

module.exports = router;

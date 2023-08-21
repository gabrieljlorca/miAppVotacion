const express = require('express');
const router = express.Router();
const votacionController = require('../controllers/votacionController');
const Padron = require('../models/Padron'); // Importa el modelo Padron

// TODO: Agregar middleware de autenticación aquí antes de obtener los votos.
// Ruta para obtener todos los votos
router.get('/votos', votacionController.obtenerVotos);

// TODO: Agregar middleware de autenticación aquí antes de permitir votar.
// Ruta para registrar un voto
router.post('/votar', votacionController.registrarVoto);

// Ruta TEMPORAL para obtener el padrón
// TODO: ELIMINAR esta ruta una vez que hayas terminado tus pruebas.
router.get('/padron', async (req, res) => {
    try {
        const padronList = await Padron.find();
        res.json(padronList);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener el padrón');
    }
});

// Aquí puedes continuar agregando más rutas según las necesidades de tu aplicación.

module.exports = router;

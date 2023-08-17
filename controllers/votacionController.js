const Votacion = require('../models/Votacion');

const votacionController = {
    getVotaciones: async (req, res) => {
        try {
            const votaciones = await Votacion.find();
            res.json(votaciones);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Otros controladores para las demás operaciones CRUD
    // createVotacion, getVotacion, updateVotacion, deleteVotacion
};

module.exports = votacionController;

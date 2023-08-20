const mongoose = require('mongoose');

const votacionSchema = new mongoose.Schema({
    cedula: {
        type: String,
        required: true,
        unique: true  // Asegura que cada número de cédula sea único en la base de datos.
    },
    votoGrupo1: {
        type: String,
        required: true
    },
    votoGrupo2: {
        type: String,
        required: true
    },
    fechaVotacion: {
        type: Date,
        default: Date.now // La fecha se establecerá automáticamente al momento de votar.
    }
});

module.exports = mongoose.model('Votacion', votacionSchema);

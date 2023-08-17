const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const padronSchema = new mongoose.Schema({
    cedula: {
        type: String,
        required: true,
        unique: true  // Asegura que cada número de cédula sea único en la base de datos.
    },
    nombre: {
        type: String,
        required: true
    },
    nom_provincia: {
        type: String,
        required: true
    },
    haVotado: {
        type: Boolean,
        default: false // Por defecto, todos los socios no han votado.
    }
});

padronSchema.plugin(uniqueValidator); // Añade la validación de campos únicos al esquema.

module.exports = mongoose.model('Padron', padronSchema);

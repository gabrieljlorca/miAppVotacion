const mongoose = require('mongoose');

const VotacionSchema = new mongoose.Schema({
  // Otros campos que ya puedas tener
  votoGrupo1: {
    type: String,
    enum: ['LISTA1', 'LISTA2', 'LISTA3', 'VOTOBLANCO', 'VOTONULO'],
    required: true
  },
  votoGrupo2: {
    type: String,
    enum: ['CVLISTA1', 'CVLISTA2', 'CVLISTA3', 'CVVOTOBLANCO', 'CVVOTONULO'],
    required: true
  },
  // ... otros campos
}, {
  collection: 'votacions' // Nombre correcto de la colección en la base de datos
});

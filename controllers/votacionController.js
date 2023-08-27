const Votacion = require('../models/Votacion');

// Función para registrar un voto
exports.registrarVoto = async (req, res) => {
  const { votoGrupo1, votoGrupo2 } = req.body;

  try {
    console.log('Datos recibidos:', votoGrupo1, votoGrupo2);

    const nuevoVoto = new Votacion({
      votoGrupo1,
      votoGrupo2
    });

    await nuevoVoto.save();
    res.status(201).json({ message: 'Voto registrado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar el voto' });
  }
};

// Función para obtener los resultados de la votación
exports.obtenerResultados = async (req, res) => {
  try {
    console.log('Antes de buscar votos');
    const votos = await Votacion.find(); // Obtener todos los documentos de votación
    console.log('Después de buscar votos');

    let resultados = {
      votoGrupo1: {},
      votoGrupo2: {}
    };

    // Contar los votos para votoGrupo1
    votos.forEach(voto => {
      if (!resultados.votoGrupo1[voto.votoGrupo1]) {
        resultados.votoGrupo1[voto.votoGrupo1] = 1;
      } else {
        resultados.votoGrupo1[voto.votoGrupo1]++;
      }
    });

    // Contar los votos para votoGrupo2
    votos.forEach(voto => {
      if (!resultados.votoGrupo2[voto.votoGrupo2]) {
        resultados.votoGrupo2[voto.votoGrupo2] = 1;
      } else {
        resultados.votoGrupo2[voto.votoGrupo2]++;
      }
    });

    res.status(200).json(resultados); // Enviar resultados como respuesta
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los resultados' });
  }
};

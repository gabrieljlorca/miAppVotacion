const Votacion = require('../models/Votacion'); // Asumiendo que tienes un modelo llamado Votacion
const Padron = require('../models/Padron');

// Obtener todos los votos
exports.obtenerVotos = async (req, res) => {
    // TODO: Verificar autenticación antes de continuar.
    try {
        const votos = await Votacion.find();
        res.json(votos);
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al obtener los votos');
    }
};

// Registrar un voto
exports.registrarVoto = async (req, res) => {
    // TODO: Verificar autenticación y que el socio no haya votado previamente.
    try {
        const { cedula, votoGrupo1, votoGrupo2 } = req.body;

        // Verificar si la cédula está en el padrón
        const socioEnPadron = await Padron.findOne({ cedula });
        if (!socioEnPadron) {
            // Si la cédula no está en el padrón, redirige al sitio web del cvft
            return res.redirect('https://cvft.com.ec/wp/');
        }

        // Verificar si el usuario ya votó
        const votoPrevio = await Votacion.findOne({ cedula });
        if (votoPrevio) {
            return res.status(400).send('El socio ya ha votado');
        }

        const nuevoVoto = new Votacion({ cedula, votoGrupo1, votoGrupo2 });
        await nuevoVoto.save();

        res.json({ msg: 'Voto registrado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al registrar el voto');
    }
};

// Aquí puedo continuar agregando más funciones según las necesidades de la aplicación.

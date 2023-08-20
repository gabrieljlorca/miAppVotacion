const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
const helmet = require('helmet');
const votacionRoutes = require('./routes/votacionRoutes');

const MONGODB_URI = 'mongodb://127.0.0.1:27017/votacionDB';

// Conexión a MongoDB con reintentos y manejo de eventos
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    server: {
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 1000
    }
}).then(() => {
    console.log('Conectado a MongoDB');
}).catch(err => {
    console.error('Error conectando a MongoDB:', err);
});

mongoose.connection.on('connected', () => {
    console.log('Conectado a MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('Error conectando a MongoDB:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Desconectado de MongoDB');
});

app.use(helmet()); 

app.use(express.json());

app.get('/', (req, res) => {
    res.send('¡Hola Mundo!');
});

// Usar las rutas de votación
app.use('/api/votacion', votacionRoutes);

app.listen(PORT, () => {
    console.log(`Servidor en marcha en http://0.0.0.0:${PORT}`);
});

const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
const helmet = require('helmet');

const MONGODB_URI = 'mongodb://127.0.0.1:27017/votacionDB';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado a MongoDB');
}).catch(err => {
    console.error('Error conectando a MongoDB:', err);
});

app.use(helmet()); 

app.get('/', (req, res) => {
    res.send('¡Hola Mundo!');
});

app.listen(PORT, () => {
    console.log(`Servidor en marcha en http://localhost:${PORT}`);
});

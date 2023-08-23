const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://Corpmontpubli:elecciones2023@10.194.0.2:27017/testDB';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Conectado a MongoDB');
    process.exit(0);
}).catch(err => {
    console.error('Error conectando a MongoDB:', err);
    process.exit(1);
});

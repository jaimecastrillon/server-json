const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Configuración del cors
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hola mundo desde DAPDM');
});

app.get('/users', (req, res) => {
    const users = require('./json/users.json');
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
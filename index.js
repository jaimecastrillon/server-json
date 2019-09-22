const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Configuración del cors
app.use(cors());
// Usuarios del sistema
const users = require('./json/users.json');

app.get('/', (req, res) => {
    res.send('Hola mundo desde DAPDM');
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(item => item.id == id);
    res.json({...user});
});

app.get('/users/edad/:edad', (req, res) => {
    const edad = req.params.edad;
    const user = users.filter(item => item.edad >= edad);
    res.json({...user});
});

app.all('*', (req, res) => {
    console.log(req)
    res.status(500).json({error: 'error message'});
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
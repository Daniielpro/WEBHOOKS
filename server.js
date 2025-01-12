const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware para parsear el cuerpo de las solicitudes JSON
app.use(bodyParser.json());

// Ruta para el webhook
app.post('/webhook', (req, res) => {
    console.log('Webhook recibido:', req.body);

    // Aquí puedes procesar los datos recibidos
    // Por ejemplo, podrías guardar la información en una base de datos

    // Responder al webhook
    res.status(200).send('Webhook recibido con éxito');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
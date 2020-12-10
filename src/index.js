const express = require('express');
const app = express();

// Settings

app.set('port', process.env.PORT || 3000);

// Middlewares

app.use(express.json());

// Routes

app.use(require('./routes/series'))

// Server

app.listen(app.get('port'), ()=>{
    console.log(`Servidor en el puerto ${app.get('port')}`);
});


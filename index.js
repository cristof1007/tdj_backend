const express = require('express');
const morgan = require("morgan");
require('dotenv').config();

const app = express();
const PORT = process.env.EXPRESS_PORT || 3300;


// configurando CORS
const domain = process.env.DOMAIN || '*';
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", domain); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Token");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});

// Morgan modulo para hacer seguimiento a los EndPoints en modo dev
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT);
console.log('Servidor corriendo en el puerto '+PORT);

//routers
var authRouter = require('./src/routes/auth.route');
authRouter(app);
var fallo = require('./src/routes/fallo.route');
fallo(app);
var formaResolucion = require('./src/routes/formaResolucion.route');
formaResolucion(app);
var materia = require('./src/routes/materia.route');
materia(app);
var tipoFallo = require('./src/routes/tipoFallo.route');
tipoFallo(app);
var titulo = require('./src/routes/titulo.route');
titulo(app);
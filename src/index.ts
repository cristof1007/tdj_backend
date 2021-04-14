import express from "express";
import morgan from "morgan"

import dotenv from "dotenv";
dotenv.config();

const app = express();


// configurando CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Token");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});

// middlewares
// Morgan modulo para hacer seguimiento a los EndPoints en modo dev
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000);

console.log('Servidor corriendo en el puerto 3000');

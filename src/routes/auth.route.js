

const auth = require('../services/auth.service')
const { check } = require('express-validator');
const prefijo = process.env.PREFIJO || 'api';

module.exports=(app) =>{
    app.post(`/${prefijo}/login`, 
    [
        check('usuario').notEmpty()
        .withMessage('El campo Usuario debe de ser ingresado')
        .isLength({min:3})
        .withMessage('Debe de tener al menos 3 caracteres'),
        check('contraseña').notEmpty()
        .withMessage('El campo Contraseña debe de ser ingresado')
        .isLength({min:3})
        .withMessage('Debe de tener al menos 3 caracteres')
    ], (req, res) => { return auth.login(req,res); })
};
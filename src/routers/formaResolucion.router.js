
const { check } = require('express-validator');
const forma = require('../services/formaResolucion.service');
const prefijo = (process.env.PREFIJO || 'api') + '/forma_resolucion';


module.exports=(app) =>{
    app.post(`/${prefijo}`, [
        check('descripcion').notEmpty()
        .withMessage('Debe de especificar la descipcion de la forma de resolucion')
        .isLength({min:3})
        .withMessage('Debe de tener al menos 3 caracteres')
    ], (req, res) => {
        return forma.create(req, res);
    })

    app.put(`/${prefijo}`, [
        check('descripcion').notEmpty()
        .withMessage('Debe de especificar la descipcion de la forma de resolucion')
        .isLength({min:3})
        .withMessage('Debe de tener al menos 3 caracteres')
    ], (req, res) => {
        return forma.update(req, res);
    })

    app.delete(`/${prefijo}`, [
        check('idTipoResolucion').isNumeric({min:1})
        .withMessage('Debe de especificarse como numero')
        .custom(value => {
            if(value < 1) {
                return Promise.reject('Id invalido')
            }
        })
    ], (req, res) => {
        return forma.dell(req, res);
    })
};

const { check } = require('express-validator');
const forma = require('../services/formaResolucion.service');
const {validarToken} = require('../libs/auth.guard')
const prefijo = (process.env.PREFIJO || 'api') + '/materia';


module.exports=(app) =>{
    app.post(`/${prefijo}`, [validarToken],
    [
        check('descripcion').notEmpty()
        .withMessage('Debe de especificar la descipcion de la materia')
        .isLength({min:3})
        .withMessage('Debe de tener al menos 3 caracteres'),

        check('denominacionDemandante').notEmpty()
        .withMessage('Debe de especificar la denominacion del demandante')
        .isLength({min:3})
        .withMessage('Debe de tener al menos 3 caracteres'),

        check('denominacionDemandado').notEmpty()
        .withMessage('Debe de especificar la denominacion del demandado')
        .isLength({min:3})
        .withMessage('Debe de tener al menos 3 caracteres')
    ], (req, res) => {
        return forma.create(req, res);
    })

    app.put(`/${prefijo}`, [validarToken],
    [
        check('descripcion').notEmpty()
        .withMessage('Debe de especificar la descipcion de la materia')
        .isLength({min:3})
        .withMessage('Debe de tener al menos 3 caracteres'),

        check('denominacionDemandante').notEmpty()
        .withMessage('Debe de especificar la denominacion del demandante')
        .isLength({min:3})
        .withMessage('Debe de tener al menos 3 caracteres'),

        check('denominacionDemandado').notEmpty()
        .withMessage('Debe de especificar la denominacion del demandado')
        .isLength({min:3})
        .withMessage('Debe de tener al menos 3 caracteres')
    ], (req, res) => {
        return forma.update(req, res);
    })

    app.delete(`/${prefijo}`, [validarToken],
    [
        check('idMateria').isNumeric({min:1})
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
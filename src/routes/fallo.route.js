
const { check } = require('express-validator');
const forma = require('../services/formaResolucion.service');
const {validarToken} = require('../libs/auth.guard')
const prefijo = (process.env.PREFIJO || 'api') + '/fallo';


module.exports=(app) =>{
    app.post(`/${prefijo}`, [validarToken],
    [
        check('idOficina').isNumeric({min:1})
        .withMessage('Debe de especificarse la oficina')
        .custom(value => {
            if(value < 1) {
                return Promise.reject('Id invalido')
            }
        }),

        check('idTipoFallo').isNumeric({min:1})
        .withMessage('Debe de especificarse el tipo de fallo')
        .custom(value => {
            if(value < 1) {
                return Promise.reject('Id invalido')
            }
        }),
        
        check('idProceso').isNumeric({min:1})
        .withMessage('Debe de especificarse un proceso')
        .custom(value => {
            if(value < 1) {
                return Promise.reject('Id invalido')
            }
        }),
        
        check('idTitulo').isNumeric({min:1})
        .withMessage('Debe de especificarse un titulo')
        .custom(value => {
            if(value < 1) {
                return Promise.reject('Id invalido')
            }
        }),
        
        check('idFormaResolucion').isNumeric({min:1})
        .withMessage('Debe de especificarse la forma de resolucion')
        .custom(value => {
            if(value < 1) {
                return Promise.reject('Id invalido')
            }
        }),

        check('numeroFallo').notEmpty()
        .withMessage('Es necesario el numero de fallo')
        .isLength({min:3})
        .withMessage('Debe de tener al menos 3 caracteres'),

        check('fecha').notEmpty()
        .withMessage('se debe de definir una fecha')
        .isDate()
        .withMessage('el formato es incorrecto este debe de ser: YYYY-MM-DD'),
        
        check('idFuncionarioRelator').isNumeric({min:1})
        .withMessage('Debe de especificarse un funcionario relator')
        .custom(value => {
            if(value < 1) {
                return Promise.reject('Id invalido')
            }
        }),
 
        check('codigo').notEmpty()
        .withMessage('no se recibio el codigo del fallo')
        .isLength({min:3})
        .withMessage('Debe de tener al menos 3 caracteres'),

        check('contenidoHtml').notEmpty()
        .withMessage('no se recibio el contenido en formato HTML')
        .isLength({min:3})
        .withMessage('Debe de tener al menos 3 caracteres'),

        check('contenido').notEmpty()
        .withMessage('no se recibio el contenido en formato texto plano')
        .isDate()
        .isLength({min:3})
        .withMessage('Debe de tener al menos 3 caracteres'),

        check('demandante').notEmpty()
        .withMessage('se debe de definir el demandante')
        .isLength({min:3})
        .withMessage('Debe de tener al menos 3 caracteres'),
        
        check('demandado').notEmpty()
        .withMessage('se debe de definir el demandado')
        .isLength({min:3})
        .withMessage('Debe de tener al menos 3 caracteres'),

        check('demandado').notEmpty()
        .withMessage('se debe de definir el demandado')
        .isLength({min:3})
        .withMessage('Debe de tener al menos 3 caracteres'),

    ], (req, res) => {
        return forma.create(req, res);
    })

    app.put(`/${prefijo}`, [validarToken],
    [
        check('idOficina').isNumeric({min:1})
        .withMessage('Debe de especificarse la oficina')
        .custom(value => {
            if(value < 1) {
                return Promise.reject('Id invalido')
            }
        }),

        check('idTipoFallo').isNumeric({min:1})
        .withMessage('Debe de especificarse el tipo de fallo')
        .custom(value => {
            if(value < 1) {
                return Promise.reject('Id invalido')
            }
        }),
        
        check('idProceso').isNumeric({min:1})
        .withMessage('Debe de especificarse un proceso')
        .custom(value => {
            if(value < 1) {
                return Promise.reject('Id invalido')
            }
        }),
        
        check('idTitulo').isNumeric({min:1})
        .withMessage('Debe de especificarse un titulo')
        .custom(value => {
            if(value < 1) {
                return Promise.reject('Id invalido')
            }
        }),
        
        check('idFormaResolucion').isNumeric({min:1})
        .withMessage('Debe de especificarse la forma de resolucion')
        .custom(value => {
            if(value < 1) {
                return Promise.reject('Id invalido')
            }
        }),

        check('numeroFallo').notEmpty()
        .withMessage('Es necesario el numero de fallo')
        .isLength({min:3})
        .withMessage('Debe de tener al menos 3 caracteres'),

        check('fecha').notEmpty()
        .withMessage('se debe de definir una fecha')
        .isDate()
        .withMessage('el formato es incorrecto este debe de ser: YYYY-MM-DD'),
        
        check('idFuncionarioRelator').isNumeric({min:1})
        .withMessage('Debe de especificarse un funcionario relator')
        .custom(value => {
            if(value < 1) {
                return Promise.reject('Id invalido')
            }
        }),
 
        check('codigo').notEmpty()
        .withMessage('no se recibio el codigo del fallo')
        .isLength({min:3})
        .withMessage('Debe de tener al menos 3 caracteres'),

        check('contenidoHtml').notEmpty()
        .withMessage('no se recibio el contenido en formato HTML')
        .isLength({min:3})
        .withMessage('Debe de tener al menos 3 caracteres'),

        check('contenido').notEmpty()
        .withMessage('no se recibio el contenido en formato texto plano')
        .isDate()
        .isLength({min:3})
        .withMessage('Debe de tener al menos 3 caracteres'),

        check('demandante').notEmpty()
        .withMessage('se debe de definir el demandante')
        .isLength({min:3})
        .withMessage('Debe de tener al menos 3 caracteres'),
        
        check('demandado').notEmpty()
        .withMessage('se debe de definir el demandado')
        .isLength({min:3})
        .withMessage('Debe de tener al menos 3 caracteres'),

        check('demandado').notEmpty()
        .withMessage('se debe de definir el demandado')
        .isLength({min:3})
        .withMessage('Debe de tener al menos 3 caracteres'),
    ], (req, res) => {
        return forma.update(req, res);
    })

    app.delete(`/${prefijo}`, [validarToken],
    [
        check('idFallo').isNumeric({min:1})
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
'use strict'
const { check, validationResult } = require('express-validator');


module.exports = {
    create: async (req, res) => {
        let errors = validationResult(req).array();
        if(errors) 
            return res.status(406).json(errors)

        return res.json(req.body);
    },

    update: (req, res) => {
        let errors = validationResult(req).array();
        if(errors) 
            return res.status(406).json(errors)
        return res.json(req.body);
    },

    dell: (req, res) => {
        return res.json(req.body);
    }
    
}
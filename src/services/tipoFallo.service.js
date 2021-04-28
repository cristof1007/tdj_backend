'use strict'
const { validationResult } = require('express-validator');


module.exports = {
    list: async() => {
        // sequlize

    },

    get: async(id) => {
        // sequlize

    },

    create: async (req, res) => {
        let errors = validationResult(req).array();
        if(errors) 
            return res.status(406).json(errors)

        // sequlize
        return res.json(req.body);
    },

    update: (req, res) => {
        let errors = validationResult(req).array();
        if(errors) 
            return res.status(406).json(errors)
            
        // sequlize
        return res.json(req.body);
    },

    dell: (req, res) => {
        // sequlize
        return res.json(req.body);
    }
    
}
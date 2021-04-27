
const auth = require('../services/auth.service')
const prefijo = process.env.PREFIJO || 'api';

module.exports=(app) =>{
    app.post(`/${prefijo}/login`, (req, res) => { return auth.login(req,res); })
};
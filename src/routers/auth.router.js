

const auth = require('../services/auth.service')
const prefijo = process.env.PREFIJO || 'api';

module.exports=(app) =>{
    app.get('/', (req, res)=>{
        console.log('index');
        return res.status(200);
    })

    app.post(`/${prefijo}/login`, (req, res) => { return auth.login(req,res); })
};
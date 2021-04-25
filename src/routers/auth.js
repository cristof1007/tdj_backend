

const auth = require('../services/auth')

module.exports=(app) =>{
    const prefijo = process.env.PREFIJO || 'api';


    //place your routes in here..
    app.get('/', (req, res)=>{
        console.log('index');
        return res.status(200);
    })

    app.post(`/${prefijo}/login`, (req, res) => { return await auth.login(req,res); })
};
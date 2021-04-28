const jwt = require('jsonwebtoken');
const fetch = require('node-fetch');
const users = [
    {
        usuario: 'john',
        contraseña: '1234',
        rol: 'user'
    }, {
        usuario: 'anna',
        contraseña: '1234',
        rol: 'user'
    }
];
const key = process.env.TOKEN || 'token_default';
const timeValid = process.env.TIME_VALID || '1h';

module.exports = {
    login: async(req, res) => { 
        body = req.body;
        const user = users.find(u => { return u.usuario === body.usuario && u.contraseña === body.contraseña });
        if (user) {
            let data = { usuario: user.usuario,  rol: user.rol, permissions:'user' }
            const accessToken = jwt.sign(data, key, {
                expiresIn:timeValid
            });
            res.json({
                data: data,
                token: accessToken
            });
        } else {
            res.status(401).send('Datos incorrectos');
        }
        // fetch('http://zeus.pj-scr.poderjudicial.gov.bo/api/login/cambiarclave', {
        //     method:'POST',
        //     body: body,
        //     headers: { 'Content-Type': 'application/json' }
        // })
        // .then(res => {
        //     res.json()
        //     console.log(res);
        // })
        // .then(json => {
        //     console.log('JSON:', json)
        // });
    }
}
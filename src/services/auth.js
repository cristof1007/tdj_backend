const jwt = require('jsonwebtoken');
const cheker = require('../libs/validator')

const users = [
    {
        user: 'john',
        password: '1234',
        role: 'admin'
    }, {
        user: 'anna',
        password: '1234',
        role: 'member'
    }
];
const key = process.env.TOKEN || 'token_default';

module.exports = {
    
    login: async(req, res) => { 

        body = req.body;
        let verify = cheker.verifyBody(body, ['usuario', 'password']);
        if(!verify) {
            return res.status(412).json('ERROR: El formato recibido no coincide con los parametros validos')
        }
        
        let messageError = cheker.required(bodi.user, 3);
        messageError += cheker.require(body.password, 4);
        if(messageError != ''){
            return res.status(412).json(`ERROR: no se cumple con los requisitos de body con errores en:\n${messageError}`)
        }

        const user = users.find(u => { return u.user === body.user && u.password === body.password });
        if (user) {
            let data = { usuario: user.user,  rol: user.role }
            const accessToken = jwt.sign(data, key);
            res.json({
                data: data,
                token: accessToken
            });
        } else {
            res.status(401).send('Datos incorrectos');
        }
    }
}
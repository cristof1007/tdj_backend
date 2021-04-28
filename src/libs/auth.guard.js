const jwt = require('jsonwebtoken')

module.exports = { validarToken : (req, res, next) => {
        const token = req.header('Authorization');
        if (!token)
            return res.status(401).json('Acceso negado');
        else {
            // TODO: verificar si el payload en el backend se va a utilizar
            const payload = jwt.verify(token, process.env.TOKEN || 'TokenNoExists');
            next();
        }
    },
}

// const authenticateJWT = (req, res, next) => {
//     const authHeader = req.headers.authorization;

//     if (authHeader) {
//         const token = authHeader.split(' ')[1];

//         jwt.verify(token, accessTokenSecret, (err, user) => {
//             if (err) {
//                 return res.sendStatus(403);
//             }

//             req.user = user;
//             next();
//         });
//     } else {
//         res.sendStatus(401);
//     }
// }

// module.exports = {authenticateJWT}
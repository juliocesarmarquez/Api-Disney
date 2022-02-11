const { createHmac } = require('crypto');
const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    const { JWT_SECRET } = process.env;

    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearertoken = bearerHeader.split(" ")[1];
        req.token = bearertoken;
        jwt.verify(req.token, JWT_SECRET, async (error, authData) => {
            if(error){
                return res.send('token invalido.');
            }
            req.user=authData
            return next();
        })

    } else {
        res.send('Debe agregar token en header con la palabra Bearer');
    }

};
function encript(secret) {
    return createHmac('sha256', secret).digest('hex');
};


module.exports = { verifyToken, encript }
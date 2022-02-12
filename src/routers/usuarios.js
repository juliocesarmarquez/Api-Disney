const { Router } = require('express');
const { getModel } = require('../database');
const jwt = require('jsonwebtoken');
const { encript  } = require('../middlewares/middlewares');


function creaUsuarioRouter(params) {
    const router = new Router();
   
    router.post('/auth/register/', async (req, res) => {
        try {
            const User = getModel('Usuarios');
            const data = new User({
                nombreUsuario: req.body.nombreUsuario,
                email: req.body.email,
                password: encript(req.body.password),
            });
            const mail = await getModel('Usuarios').findOne({
                where: { email: req.body.email }
            });
            if (mail === null) {
                await data.save()
                res.status(200).send('Registro exitoso.');
            } else {
                throw res.status(500).send('Debe usar otra cuenta de email.');
            }
        } catch (error) {
            res.status(500).send('Debe completar todos los campos.');
        }
    });
    router.post('/auth/login/', async (req, res) => {
        try {
            const { JWT_SECRET } = process.env;
            const mail = await getModel('Usuarios').findOne({
                where: {
                    email: req.body.email,
                    password: encript(req.body.password)
                }
            });
            if (mail !== null) {
                jwt.sign({
                   mail
                }
                    , JWT_SECRET, (err, token) => {
                        res.json({ token })
                    });
            } else {
                throw new Error('Problema de información.');
            }
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    });
    return router;
}

module.exports = {
    creaUsuarioRouter
}
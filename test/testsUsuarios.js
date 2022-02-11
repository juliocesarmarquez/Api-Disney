const { Router } = require('express');
const db = require('../src/database');
const usuarios = [{
  email: "prueba1@gmail.com",
  password: "prueba1",

}, {
  email: "prueba2@gmail.com",
  password: "prueba2",

}];
function makeRouter() {
  const router = Router();

  router.post('/', async (req, res) => {
    try {
      const User = db.getModel('Usuarios');
      const data = {
        nombreUsuario: req.body.nombreUsuario,
        email: req.body.email,
        password: req.body.password,
      };
      for (let usuario of usuarios) {
        if (data.email !== usuario.email) {
          await usuarios.push(data);
          res.status(201).json('Listo para acceder.');
          return
        } else {
          res.status(417).send('El email ya se encuentra registrado');
        }
      }
    } catch (error) {
      res.status(417).send('Debe completar todos los campos.' + msj);
    }
  });

  return router;
}

module.exports = {   makeRouter, usuarios };
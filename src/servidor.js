const express = require('express');
const { creaUsuarioRouter } = require('./routers/usuarios');
const { creaPersonajeRouter } = require('./routers/personajes');
const { creaPeliculaRouter } = require('./routers/peliculas');
const swaggerUi = require('swagger-ui-express');
const yaml = require('js-yaml');
const fs = require('fs');
const { makeRouter: makeUsersRouter } = require('../test/usersTest');
function loadSwaggerinfo(server) {
    try {
        const doc = yaml.load(fs.readFileSync('./src/specs.yml', 'utf8'));
        server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(doc));
    } catch (e) {
        console.log(e);
    }
};
function makeServer() {
    const server = express();
    server.use(express.json());
    server.use(express.urlencoded({ extended: false }));
    server.use('/api', creaPeliculaRouter());
    server.use('/api', creaPersonajeRouter());
    server.use('/api', creaUsuarioRouter());
    server.use('/api/userstest', makeUsersRouter());
    loadSwaggerinfo(server);
    return server;
}
module.exports = {
    makeServer,
};
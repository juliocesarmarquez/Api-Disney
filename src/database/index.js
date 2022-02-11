const Sequelize = require('sequelize');
const { creaUsuarioModel } = require('./models/usuarios');
const { creaPeliculaModel } = require('./models/peliculas');
const { creaPersonajeModel } = require('./models/personajes');
const { creaGeneroModel } = require('./models/genero');


const models = {};
let connectionS = '';
async function connect(host, port, username, password, database) {

  const connection = new Sequelize({
    host,
    port,
    username,
    password,
    database,
    dialect: 'mariadb'
  });

  models.User = creaUsuarioModel(connection);
  models.Pelicula = creaPeliculaModel(connection);
  models.Personaje = creaPersonajeModel(connection);
  models.Genero = creaGeneroModel(connection);

  models.Pelicula.hasMany(models.Personaje);
  models.Genero.hasMany(models.Pelicula);
  models.Personaje.belongsTo(models.Pelicula);
  models.Pelicula.belongsTo(models.Genero);

  
  models.Pelicula.sync();
  models.Personaje.sync();
  models.Usuarios.sync();
  models.Genero.sync();
  
  try {
    await connection.authenticate();
    await connection.sync();
    connectionS = connection;
    console.log('conexión exitosa');
    return true;
  } catch (error) {
    console.error('problemas al conectarse con DB: ', error);
    return false;
  }
}
function getConnection(){
  return connectionS;
}
function getModel(name) {
  console.log(models)
  if (models[name]) {
    return models[name];
  } else {
    return null
  }
}

module.exports = {
  connect, getModel, getConnection
};

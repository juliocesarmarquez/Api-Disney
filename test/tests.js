const { expect } = require('chai');
const request = require('supertest');
const { makeServer } = require('../src/servidor');

describe('API Registro test', () => {
  // Tests
  it('Creación de usuario.', (done) => {
    const newuser = { nombreUsuario: 'joe', email: 'joe@gmail.com', password: 'joetest' }
    const server = makeServer();
    request(server)
      .post('/api/usuariostest')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send(newuser)
      .expect(201)
      .end((err, res) => {
        if (err) {
          console.log(err);
          throw err;
        } else {
          expect(res.body).not.to.be.empty;
          expect(res.body).to.be.a('string', 'Listo para acceder.')
          done();
        }
      });
  });

  it('No puede crear un usuario con un email en uso', (done) => {
    const newuser1 = { username: 'joe', lastname: 'doe', email: 'prueba2@gmail.com', address: 'joedoe', phone: 421175, password: 'joejoe' }
    const server = makeServer();
    request(server)
      .post('/api/usuariostest')
      .send(newuser1)
      .expect(417)
      .end(done);
  });
});
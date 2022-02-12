const { expect } = require('chai');
const request = require('supertest');
const { makeServer } = require('../src/servidor');

describe('Registro test', () => {
  // Tests
  it('Crear un usuario', (done) => {
    const newuser = { nombreUsuario: 'test', email: 'test@gmail.com', password: 'test' }
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
          expect(res.body).to.be.a('string', 'Ya puede iniciar sesión.')
          done();
        }
      });
  });

  it('No puede crear una cuenta si su email ya esta registrado', (done) => {
    const newuser1 = { nombreUsuario: 'test', lastname: 'test', email: 'person2@gmail.com', address: 'test 123', phone: 123, password: 'test' }
    const server = makeServer();
    request(server)
      .post('/api/usuariostest')
      .send(newuser1)
      .expect(417)
      .end(done);
  });
});
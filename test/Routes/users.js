const Lab = require('lab');
const Server = require('../../src/server');
const Chai = require('chai');

exports.lab = Lab.script();
const { lab } = exports;
const { expect } = Chai;

lab.experiment('Users', () => {
  lab.beforeEach(() => {
    const options = {
      method: 'POST',
      path: '/users'
    };
    Server.inject(options, (result) => {
      expect(result).to.eqls(false);

    })
  });
  lab.afterEach(() => {
    Models.users.destroy();
  })
  lab.test('get all users', (done) => {
    const options = {
      method: 'GET',
      path: '/users'
    };
    Server.inject(options, (result) => {
      expect(result).to.eqls([]);

    })
  })

  lab.test('get all users', (done) => {
    const options = {
      method: 'GET',
      path: '/users'
    };
    Server.inject(options, (result) => {
      expect(result).to.eqls([]);

    })
  })

});
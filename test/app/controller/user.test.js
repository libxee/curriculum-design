'use strict';

const { assert, app } = require('egg-mock/bootstrap');

describe('test/app/controller/user.test.js', () => {
  describe('POST /regist', () => {
    it('should work', async () => {
      app.mockCsrf();
      const res = await app
        .httpRequest()
        .post('/regist')
        .send({
          username: 'test',
          password: 'test',
        });
      assert(res.status === 200);
    });
  });
  describe('POST /login', () => {
    it('should work', async () => {
      app.mockCsrf();
      const res = await app
        .httpRequest()
        .post('/login')
        .send({
          username: 'test',
          password: 'test',
        });
      assert(res.status === 200);
    });
  });
});

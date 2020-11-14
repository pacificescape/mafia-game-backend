import createApp from '..';
import { serial as test } from 'ava';
import request from 'supertest';
import generateToken from '../service/auth/generateToken';
import issueTokenPair from '../service/auth/issueTokenPair';
import db from '../database/database';
// import generateRefToken from '../service/auth/generateRefToken'

let app: any;
let mongo: any;
const regLogin = Date.now() + '@cbc.ca';

test.before(async () => {
  const { server, db } = await createApp();
  app = server.listen();
  mongo = db;
});

test.after(async () => {
  const res = await mongo.User.deleteOne({ login: regLogin });
  console.log('deleted:', res.deletedCount);
});

test('User can login', async t => {
  const res = await request(app).post('/api/login').send({
    login: 'arkadia@cbc.ca',
    password: 'TEST_PASSWORD',
  });

  t.is(res.type, 'application/json');
  t.is(res.status, 200);
});

test('User receives 403 on invalid credentials', async t => {
  const res = await request(app).post('/api/login').send({
    login: 'INVALID',
    password: 'INVALID',
  });

  t.is(res.status, 403);
});

test('User can register', async t => {
  const res = await request(app).post('/api/register').send({
    login: regLogin,
    password: 'TEST_PASSWORD',
    name: 'TEST_REGISTRATION_USER',
  });

  t.is(res.type, 'application/json');
  t.is(res.status, 200);
});

test('User receives data on query', async t => {
  const token = generateToken('TEST_LOGIN_DATA');
  const res = await request(app)
    .post('/graphql')
    .send({
      query: '{ getUsers(limit: 2) { name login } }',
    })
    .set('Accept', 'application/json')
    .set('Authorization', `Bearer ${token}`);

  t.is(res.type, 'application/json');
  t.is(res.status, 200);
});

test('User receives 401 on expired token', async t => {
  const token = generateToken('TEST_LOGIN_DATA', { expiresIn: '1ms' });
  const res = await request(app)
    .post('/graphql')
    .send({
      query: '{ getUsers(limit: 2) { name login } }',
    })
    .set('Accept', 'application/json')
    .set('Authorization', `Bearer ${token}`);

  t.is(res.status, 401);
});

test('User refresh token', async t => {
  const user = await mongo.User.findOne({ name: 'TEST_USER' });
  const { token, refreshToken } = await issueTokenPair(user._id);
  const res = await request(app)
    .post('/api/refresh')
    .send({ token, refreshToken });

  t.is(res.status, 200);
  t.truthy(typeof res.body.token === 'string');
  t.truthy(typeof res.body.refreshToken === 'string');
});

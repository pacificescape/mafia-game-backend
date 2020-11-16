import createApp from '..';
import { serial as test } from 'ava';
import request from 'supertest';
import generateToken from './helpers/generateToken';
import issueTokenPair from '../service/auth/issueTokenPair';

let app: any;
let mongo: any;
const regLogin = Date.now() + '@cbc.ca';

test.before(async () => {
  const { server, db } = await createApp();
  app = server.listen();
  mongo = db;
});

test('User can login', async t => {
  const res = await request(app).post('/auth/login').send({
    login: 'arkadia@cbc.ca',
    password: 'TEST_PASSWORD',
  });

  t.is(res.type, 'application/json');
  t.is(res.status, 200);

  await mongo.RefreshToken.deleteOne({ token: res.body.refreshToken });
});

test('User receives 403 on invalid credentials', async t => {
  const res = await request(app).post('/auth/login').send({
    login: 'INVALID',
    password: 'INVALID',
  });

  t.is(res.status, 403);
});

test('User can register', async t => {
  const res = await request(app).post('/auth/register').send({
    login: regLogin,
    password: 'TEST_PASSWORD',
    name: 'TEST_REGISTRATION_USER',
  });

  t.is(res.type, 'application/json');
  t.is(res.status, 200);

  await mongo.User.deleteOne({ login: regLogin });
});

test('User refresh token', async t => {
  const user = await mongo.User.findOne({ name: 'TEST_USER' });
  const { refreshToken } = await issueTokenPair(user.id);
  const res = await request(app).post('/auth/refresh').send({ refreshToken });

  t.is(res.status, 200);
  t.truthy(typeof res.body.token === 'string');
  t.truthy(typeof res.body.refreshToken === 'string');

  await mongo.RefreshToken.deleteOne({ token: refreshToken });
});

test('User logout', async t => {
  const user = await mongo.User.findOne({ name: 'TEST_USER' });
  const { token, refreshToken } = await issueTokenPair(user._id);
  const res = await request(app)
    .post('/auth/logout')
    .set('Authorization', `Bearer ${token}`);

  t.is(res.status, 200);

  await mongo.RefreshToken.deleteOne({ token: refreshToken });
});

test('User can use refresh token only once', async t => {
  const user = await mongo.User.findOne({ name: 'TEST_USER' });
  const { refreshToken } = await issueTokenPair(user.id);
  const res = await request(app).post('/auth/refresh').send({ refreshToken });

  t.is(res.status, 200);
  t.truthy(typeof res.body.token === 'string');
  t.truthy(typeof res.body.refreshToken === 'string');

  const res2 = await request(app).post('/auth/refresh').send({ refreshToken });

  t.is(res2.status, 403);

  await mongo.RefreshToken.deleteOne({ token: refreshToken });
});

// GraphQL auth tests

test('User receives data on query (user { getMe })', async t => {
  const token = generateToken('5fad21201d3b6c1d55a565dc');
  const res = await request(app)
    .post('/graphql')
    .send({
      query: '{ user { getMe { name login } } }',
    })
    .set('Accept', 'application/json')
    .set('Authorization', `Bearer ${token}`);

  t.is(res.type, 'application/json');
  t.is(res.status, 200);
});

test('User receives 401 on expired token', async t => {
  const token = generateToken('TEST_LOGIN_DATA', { expiresIn: '0ms' });
  const res = await request(app)
    .post('/graphql')
    .send({
      query: '{ user { getMe { name login } } }',
    })
    .set('Accept', 'application/json')
    .set('Authorization', `Bearer ${token}`);

  t.is(res.body.errors[0].extensions.code, 'UNAUTHENTICATED');
  t.is(res.body.data.user.getMe, null);
  t.is(res.status, 200);
});

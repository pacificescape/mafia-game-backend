const Koa = require('koa');
const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');
const schema = require('./graphql/schema');
const initDB = require('./database/database');
require('dotenv').config();

const app = new Koa();

initDB();

app.use(
  mount(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    }),
  ),
);

app.listen(process.env.PORT || 5000);

app.on('error', err => {
  console.log(err.message);
});

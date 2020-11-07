import Koa from 'koa';
import mount from 'koa-mount';
import graphqlHTTP from 'koa-graphql';
import schema from './graphql/schema.js';
import initDB from './database/index.js';
import dotenv from 'dotenv';

dotenv.config();

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

app.on('error', ({ message }) => console.log(message));

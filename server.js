import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';

// === env ===
import dotenv from 'dotenv';

// === graphql ===
import mount from 'koa-mount';
import graphqlHTTP from 'koa-graphql';
import schema from './graphql/schema.js';

// === db ===
import initDB from './database/index.js';

// === routes ===
import apiRouter from './routes/api.js';

// === utils ===
import { getPort } from './utils/index.js';

dotenv.config();
initDB();

const app = new Koa();

app
  .use(logger())
  .use(apiRouter.routes())
  .use(apiRouter.allowedMethods())
  .use(bodyParser())
  .use(
    mount(
      '/graphql',
      graphqlHTTP({
        schema: schema,
        graphiql: true,
      }),
    ),
  );

app
  .listen(getPort())
  .on('listening', () =>
    console.log(`=== Listening on: http://localhost:${getPort()}/api/ ===`),
  );

app.on('error', ({ message }) => console.log(message));

import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';

// === controllers ===
import appRouter from './controllers/app.controller';

// === graphql ===
import mount from 'koa-mount';
import graphqlHTTP from 'koa-graphql';
import schema from './graphql/schema.js';

// === env ===
import { config } from 'dotenv';

// === utils ===
import { getPort } from './shared/utils/process.util';

// === db ===
import initDB from './database/database';

config();
initDB();

const app = new Koa();

app
  .use(logger())
  .use(appRouter.routes())
  .use(appRouter.allowedMethods())
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
    console.log(`Listening on: http://localhost:${getPort()}/api/`),
  );

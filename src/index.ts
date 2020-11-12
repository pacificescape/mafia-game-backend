import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import cors from '@koa/cors';

// === controllers ===
import appRouter from './controllers/app.controller';

// === graphql ===
import mount from 'koa-mount';
import graphqlHTTP from 'koa-graphql';
import schema from './graphql/schema.js';

// === env ===
import { config } from 'dotenv';

// === utils ===
import { addDb } from './middlewares/improveAppContext'
import { getPort } from './shared/utils/process.util';

// === interfaces ===
import { ICustomAppState, ICustomAppContext } from './shared/interfaces/customContext.interface'

config();

const app = new Koa<ICustomAppState, ICustomAppContext>();

app
  .use(addDb())
  .use(logger())
  .use(cors())
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

app.listen(getPort()).on('listening', () => {
  console.log(`Listening on: http://localhost:${getPort()}/api/`);
  console.log(`GraphQL on: http://localhost:${getPort()}/graphql/`);
});

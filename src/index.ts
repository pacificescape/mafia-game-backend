import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import cors from '@koa/cors';
import jwtMiddleware from 'koa-jwt';

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

// === interfaces ===
import {
  ICustomAppState,
  ICustomAppContext,
} from './shared/interfaces/customContext.interface';

import db from './database/database';

config();

const initDb = () =>
  new Promise(resolve => {
    db.connection.once('open', () => {
      console.log('Connected to MongoDB');
      resolve();
    });
    db.error;
  });

async function createApp() {
  const app = new Koa<ICustomAppState, ICustomAppContext>();
  await initDb();

  app
    .use(async (ctx, next) => {
      ctx.db = db;
      await next();
    })
    .use(logger())
    .use(cors())
    .use(bodyParser())
    .use(appRouter.routes())
    .use(appRouter.allowedMethods())
    .use(
      jwtMiddleware({
        secret: process.env.SECRET as string,
      }),
    )
    .use(
      mount(
        '/graphql',
        graphqlHTTP({
          schema: schema,
          graphiql: true,
          // context: (ctx: Context) => {
          //   return ctx;
          // },
        }),
      ),
    );
  return { server: app, db };
}

console.log('module.parent:', !!module.parent);
if (require.main === module) {
  createApp().then(({ server }) => {
    server.listen(getPort()).on('listening', () => {
      console.log(`Listening on: http://localhost:${getPort()}/api/`);
      console.log(`GraphQL on: http://localhost:${getPort()}/graphql/`);
    });
  });
}

export default createApp;

import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import cors from '@koa/cors';
import jwtMiddleware from 'koa-jwt';

// === controllers ===
import authRouter from './controllers/auth.controller';

// === database ===
import db from './database/database';

// === services ===
import getUser from './service/auth/getUser';

// === graphql ===
import { ApolloServer } from 'apollo-server-koa';
import schema from './graphql/schema';

// === env ===
import { config } from 'dotenv';

// === utils ===
import { getPort } from './shared/utils/process.util';
import { __prod__ } from './constants';

// === interfaces ===
import {
  ICustomAppState,
  ICustomAppContext,
} from './shared/interfaces/customContext.interface';

config();

const initDb = () =>
  new Promise<void>(resolve => {
    db.connection.once('open', () => {
      console.log('Connected to MongoDB');
      resolve();
    });
    db.error;
  });

const apollo = new ApolloServer({
  schema,
  introspection: true,
  playground: true,
  tracing: true,
  context: async ({ ctx }) => {
    return {
      user: await getUser(ctx.state?.user?.id),
      koa: ctx,
    };
  },
  debug: __prod__,
});

async function createApp() {
  const app = new Koa<ICustomAppState, ICustomAppContext>();

  await initDb();

  // app.ws.use(route)

  app
    .use(async (ctx, next) => {
      ctx.db = db;
      await next();
    })
    .use(logger())
    .use(cors())
    .use(bodyParser())
    .use(authRouter.routes())
    .use(authRouter.allowedMethods())
    .use(
      jwtMiddleware({
        secret: process.env.SECRET as string,
        passthrough: true,
      }),
    )
    .use(apollo.getMiddleware());
  return { server: app, db };
}

if (require.main === module) {
  createApp().then(({ server }) => {
    server.listen(getPort()).on('listening', () => {
      console.log(`🚀 Server ready at: http://localhost:${getPort()}/api/`);
      console.log(
        `👾 GraphQL ready on: http://localhost:${getPort()}${
          apollo.graphqlPath
        }`,
      );
    });
  });
}

export default createApp;

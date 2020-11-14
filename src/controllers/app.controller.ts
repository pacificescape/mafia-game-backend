import { DefaultState } from 'koa';
import Router from 'koa-router';
import jwtMiddleware from 'koa-jwt';
import { ICustomAppContext } from '../shared/interfaces/customContext.interface';
import register from './appControllers/register';
import login from './appControllers/login';
import refresh from './appControllers/refresh';
import logout from './appControllers/logout';

// import generateUsers from './appControllers/generateUsers';

const appRouter = new Router<DefaultState, ICustomAppContext>({
  prefix: '/api',
});

appRouter.post('/register', register);

appRouter.post('/login', login);

appRouter.post('/refresh', refresh);

appRouter.use(jwtMiddleware({ secret: process.env.SECRET as string }))

appRouter.post('/logout', logout);

export default appRouter;

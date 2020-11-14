import Router from 'koa-router';
import { ICustomAppContext } from '../shared/interfaces/customContext.interface';
import register from './appControllers/register';
import login from './appControllers/login';
import refresh from './appControllers/refresh';

import { DefaultState } from 'koa';
import generateUsers from './appControllers/generateUsers';

const appRouter = new Router<DefaultState, ICustomAppContext>({
  prefix: '/api',
});

appRouter.post('/register', register);

appRouter.post('/login', login);

appRouter.post('/generateUsers', generateUsers);

appRouter.post('/refresh', refresh);
export default appRouter;

import Router from 'koa-router';
import { Context } from 'vm';

const appRouter: Router = new Router({ prefix: '/api' });

appRouter.get('/', (ctx: Context) => {
  ctx.body = 'Swagger here';
});

export default appRouter;

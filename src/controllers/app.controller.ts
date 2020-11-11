import Router from 'koa-router';

const appRouter = new Router({ prefix: '/api' });

appRouter.get('/', ctx => {
  ctx.body = 'Swagger here';
});

export default appRouter;

import Router from 'koa-router';

const appRouter = new Router({ prefix: '/api' });

appRouter
  .get('/', ctx => {
    ctx.body = 'Swagger here';
  })
  .get('/users', async ctx => {
    ctx.body = `${ctx.request.method}: ${ctx.request.url}`;
  });

export default appRouter;

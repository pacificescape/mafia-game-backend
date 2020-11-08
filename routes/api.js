import Router from 'koa-router';

const router = new Router({ prefix: '/api' });

router
  .get('/', ctx => {
    ctx.body = 'Swagger here';
  })
  .get('/users', async ctx => {
    ctx.body = `${ctx.request.method}: ${ctx.request.url}`;
  });

export default router;

import Router from 'koa-router';
import { ICustomAppContext } from '../shared/interfaces/customContext.interface'

const appRouter = new Router<unknown, ICustomAppContext>({ prefix: '/api' });

appRouter.post('/register', async ctx => {
  const { login, password } = ctx.request.body
  const user = new ctx.db.User()

  user.password = 'asdf'
});

export default appRouter;

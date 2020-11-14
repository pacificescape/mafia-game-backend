import { Context } from 'koa';

async function checkLogin(login: string, ctx: Context) {
  const user = await ctx.db.User.findOne({ login });
  if (user) return false;
  return true;
}

export default checkLogin;

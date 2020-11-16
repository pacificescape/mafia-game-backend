import bcrypt from 'bcrypt';
import { Context } from 'koa';

import issueTokenPair from '../../service/auth/issueTokenPair';

async function login(ctx: Context): Promise<void> {
  const { login, password } = ctx.request.body;
  if (!login || !password) return;
  const user = await ctx.db.User.findOne({ login });
  let newPair;

  if (user && (await bcrypt.compare(password, user.password))) {
    newPair = await issueTokenPair(user.id);
  } else {
    ctx.status = 403;
    return;
  }

  ctx.body = newPair;
}

export default login;

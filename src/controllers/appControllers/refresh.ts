import bcrypt from 'bcrypt';

import generateToken from '../../service/auth/generateToken';
import generateRefToken from '../../service/auth/generateRefToken';

import { Context } from 'koa';
import issueTokenPair from '../../service/auth/issueTokenPair';

async function refresh(ctx: Context) {
  const { refreshToken } = ctx.request.body;
  const deleted = await ctx.db.RefreshToken.findOneAndRemove({
    token: refreshToken,
  });
  if (deleted?.deletedCount === 1) {
    ctx.status = 500;
  }

  const newPair = await issueTokenPair(deleted.user.id);
  ctx.body = newPair;
}

export default refresh;

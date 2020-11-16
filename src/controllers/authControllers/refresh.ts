import { Context } from 'koa';
import issueTokenPair from '../../service/auth/issueTokenPair';

async function refresh(ctx: Context): Promise<void> {
  const { refreshToken } = ctx.request.body;
  try {
    const deleted = await ctx.db.RefreshToken.findOneAndRemove({
      token: refreshToken,
    });
    if (!deleted) {
      ctx.status = 403;
      return;
    }

    const newPair = await issueTokenPair(deleted.user.id);
    ctx.body = newPair;
  } catch (err) {
    console.log(err);
    ctx.status = 500;
  }
}

export default refresh;

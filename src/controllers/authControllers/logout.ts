import { Context } from 'koa';

async function logout(ctx: Context): Promise<void> {
  const { id } = ctx.state.user;
  try {
    const user = await ctx.db.User.findOne({ _id: id });
    if (!user) throw new Error('User not found');
    await ctx.db.RefreshToken.deleteMany({ user });
    ctx.status = 200;
  } catch (err) {
    console.log(err);
    ctx.status = 500;
  }
}

export default logout;

import bcrypt from 'bcrypt';

import { Context } from 'koa';

async function generateUsers(ctx: Context): Promise<void> {
  const users = await ctx.db.User.find().cursor();

  for await (const user of users) {
    const password = 'TEST_PASSWORD';
    user.password = await bcrypt.hash(password, 10);
    await user.save();
  }
  console.dir('done');
}

export default generateUsers;

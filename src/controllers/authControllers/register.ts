import bcrypt from 'bcrypt';

import checkLogin from '../../service/auth/checkLogin';
import issueTokenPair from '../../service/auth/issueTokenPair';

import { Context } from 'koa';

// fixed ts context error
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/36161#issuecomment-571295417

const register = async (ctx: Context): Promise<void> => {
  try {
    const { login, password, name } = ctx.request.body;
    if (!(await checkLogin(login, ctx))) {
      throw Error('Login is already used');
    }

    const user = new ctx.db.User();
    user.name = name;
    user.login = login;
    user.password = await bcrypt.hash(password, 10);
    await user.save();

    ctx.body = await issueTokenPair(user.id);
  } catch (err) {
    console.log(err);
    ctx.status = 500;
  }
};

export default register;

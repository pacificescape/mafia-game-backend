import bcrypt from 'bcrypt';

import checkUsername from '../../service/auth/checkUsername';
import generateToken from '../../service/auth/generateToken';
import generateRefToken from '../../service/auth/generateRefToken';

import { Context } from 'koa';

// fixed ts context error
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/36161#issuecomment-571295417

const register = async (ctx: Context) => {
  try {
    const { login, password, name } = ctx.request.body;
    if (!(await checkUsername(login, ctx))) {
      throw Error('Login is already used');
    }

    const user = new ctx.db.User();
    user.name = name;
    user.login = login;
    user.password = await bcrypt.hash(password, 10);
    await user.save();

    ctx.body = {
      token: generateToken(login),
      refreshToken: generateRefToken(),
    };
  } catch (err) {
    console.log(err);
    ctx.status = 500;
  }
};

export default register;

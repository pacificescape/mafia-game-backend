import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLInt,
} from 'graphql';
import userGraphQLType from './user.type';
import UserType from './user.type';

import jwt from 'jsonwebtoken';
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';
import LoginGraphQLType from './login.type';
import { Context } from 'koa';

const UserQuery = new GraphQLObjectType({
  name: 'UserQuery',
  fields: {
    // register: {
    //   type: LoginGraphQLType,
    //   args: {
    //     login: { type: GraphQLString },
    //     name: { type: GraphQLString },
    //     password: { type: GraphQLString },
    //   },
    //   resolve: register,
    // },
    // login: {
    //   type: LoginGraphQLType,
    //   args: {
    //     login: { type: GraphQLString },
    //     password: { type: GraphQLString },
    //   },
    //   resolve: login,
    // },
    getUserById: {
      type: userGraphQLType,
      args: { id: { type: GraphQLString } },
      resolve(_, args, ctx) {
        return ctx.db.User.findById(args.id);
      },
    },
    getUserByName: {
      type: userGraphQLType,
      args: { name: { type: GraphQLString } },
      resolve(_, args, ctx) {
        return ctx.db.User.findOne({ name: args.name });
      },
    },
    getUsers: {
      type: new GraphQLList(UserType),
      args: { limit: { type: GraphQLInt } },
      async resolve(_, { limit }, ctx) {
        const user = ctx.db.User.find({}).limit(limit);
        return user;
      },
    },
  },
});

// const UserMutation = new GraphQLObjectType({
//   name: 'UserMutation',
//   fields: {},
// });

export default new GraphQLSchema({
  query: UserQuery,
  // mutation: UserMutation,
});

async function login(_: any, { login, password }: any, ctx: Context) {
  const user = await ctx.db.User.findOne({ login }); // add { username }
  let token,
    refreshToken,
    status = 200;
  if (user && (await bcrypt.compare(password, user.password))) {
    (refreshToken = uuid()), (token = generateToken(login));
  } else {
    status = 401;
  }

  return {
    token,
    refreshToken,
    status,
  };
}

async function register(_: any, { login, name, password }: any, ctx: Context) {
  let status = 200;
  try {
    if (!(await checkUsername(login, ctx))) {
      status = 403;
      throw Error('Login is already used');
    }

    const user = new ctx.db.User();
    user.name = name;
    user.login = login;
    user.password = await bcrypt.hash(password, 10);
    await user.save();

    return {
      token: generateToken(login),
      refreshToken: uuid(),
      status,
    };
  } catch (err) {
    console.log(err);
    return {
      status,
    };
  }
}

async function checkUsername(login: string, ctx: Context) {
  const user = await ctx.db.User.findOne({ login });
  if (user) return false;
  return true;
}

function generateToken(login: string) {
  jwt.sign({ id: login }, process.env.SECRET as string, { expiresIn: '1d' });
}

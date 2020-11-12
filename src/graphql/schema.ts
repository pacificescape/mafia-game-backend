import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLInt,
} from 'graphql';
import userGraphQLType from './user.type';
import UserType from './user.type';

import jwt from 'jsonwebtoken'
import { v4 as uuid } from 'uuid'
import LoginGraphQLType from './login.type';

const UserQuery = new GraphQLObjectType({
  name: 'UserQuery',
  fields: {
    login: {
      type: LoginGraphQLType,
      args: {
        login: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve: async (_, { login, password }, ctx) => {
        const user = await ctx.db.User.findOne({ login }) // { username }
        let token, refreshToken, status = 200
        if (user && user.password === password) {
          refreshToken = uuid()
          token = jwt.sign({ id: user.id }, (process.env.SECRET as string))
        } else {
          status = 401
        }
        return {
          token,
          refreshToken,
          status
        }
      }
    },
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
        return user
      },
    },
  },
});

export default new GraphQLSchema({
  query: UserQuery,
});

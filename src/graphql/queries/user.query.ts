import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLID,
} from 'graphql';
import { UserType } from '../types/user.type';
import { AuthenticationError } from 'apollo-server-koa';

const UserQuery: GraphQLObjectType = new GraphQLObjectType({
  description: 'Query to interact with `Users` collection',
  name: 'UserQuery',
  fields: {
    getMe: {
      description: 'Returns a current `User`',
      type: UserType,
      resolve(_, __, ctx) {
        if (!ctx.user) throw new AuthenticationError('Athentification error');
        return ctx.user;
      },
    },
    getUserById: {
      description: 'Returns a `User` where `User.id = id` in database.',
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(_, { id }, ctx) {
        return ctx.koa.db.User.findById(id);
      },
    },
    getUserByName: {
      description: 'Returns a `User` where `User.name = name` in database.',
      type: UserType,
      args: { name: { type: GraphQLString } },
      resolve(_, { name }, ctx) {
        return ctx.koa.db.User.findOne({ name });
      },
    },
    getUsers: {
      description:
        'Returns a list of users. Use the `limit` argument to get only first `N` users.',
      type: new GraphQLList(UserType),
      args: { limit: { type: GraphQLInt } },
      resolve(_, { limit }, ctx) {
        return ctx.koa.db.User.find({}).limit(limit);
      },
    },
    countUsers: {
      description: 'Return the count of `User` documents.',
      type: GraphQLInt,
      resolve(_, __, ctx) {
        return ctx.koa.db.User.find({}).estimatedDocumentCount();
      },
    },
  },
});

export default UserQuery;

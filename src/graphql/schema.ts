import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLInt,
} from 'graphql';
import userGraphQLType from './user.type';
import User from '../models/user.model';
import UserType from './user.type';

const UserQuery = new GraphQLObjectType({
  description: 'A type that describes the User.',
  name: 'UserQuery',
  fields: {
    getUserById: {
      description:
        'Returns a User where the argument `id` is equal to `User.id` in database.',
      type: userGraphQLType,
      args: { id: { type: GraphQLString } },
      resolve(_, args) {
        return User.findById(args.id);
      },
    },
    getUserByName: {
      description:
        'Returns a User where the argument `name` is equal to `User.name` in database.',
      type: userGraphQLType,
      args: { name: { type: GraphQLString } },
      resolve(_, args) {
        return User.findOne({ name: args.name });
      },
    },
    getUsers: {
      description:
        'Returns a list of users. Use the `limit` argument to get only first `N` users.',
      type: new GraphQLList(UserType),
      args: { limit: { type: GraphQLInt } },
      resolve(_, { limit }) {
        return User.find({}).limit(limit);
      },
    },
  },
});

export default new GraphQLSchema({
  query: UserQuery,
});

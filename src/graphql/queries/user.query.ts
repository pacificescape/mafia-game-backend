import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
} from 'graphql';
import UserType from '../types/user.type';

const UserQuery: GraphQLObjectType = new GraphQLObjectType({
  description: 'Query to interact with `Users` collection',
  name: 'UserQuery',
  fields: {
    getUserById: {
      description: 'Returns a `User` where `User.id = id` in database.',
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(_, { id }, ctx) {
        return ctx.db.User.findById(id);
      },
    },
    getUserByName: {
      description: 'Returns a `User` where `User.name = name` in database.',
      type: UserType,
      args: { name: { type: GraphQLString } },
      resolve(_, { name }, ctx) {
        return ctx.db.User.findOne({ name });
      },
    },
    getUsers: {
      description:
        'Returns a list of users. Use the `limit` argument to get only first `N` users.',
      type: new GraphQLList(UserType),
      args: { limit: { type: GraphQLInt } },
      resolve(_, { limit }, ctx) {
        return ctx.db.User.find({}).limit(limit);
      },
    },
    countUsers: {
      description: 'Return the count of `User` documents.',
      type: GraphQLInt,
      resolve(_, __, ctx) {
        return ctx.db.User.find({}).estimatedDocumentCount();
      },
    },
  },
});

export default UserQuery;

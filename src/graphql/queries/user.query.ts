import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
} from 'graphql';
import User from '../../models/user.model';
import UserType from '../types/user.type';

const UserQuery: GraphQLObjectType = new GraphQLObjectType({
  description: 'Query to interact with `Users` collection',
  name: 'UserQuery',
  fields: {
    getUserById: {
      description:
        'Returns a `User` where the argument `id` is equal to `User.id` in database.',
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(_, { id }) {
        return User.findById(id);
      },
    },
    getUserByName: {
      description:
        'Returns a `User` where the argument `name` is equal to `User.name` in database.',
      type: UserType,
      args: { name: { type: GraphQLString } },
      resolve(_, { name }) {
        return User.findOne({ name });
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
    countUsers: {
      description: 'Return the count of `User` documents.',
      type: GraphQLInt,
      resolve() {
        return User.find({}).estimatedDocumentCount();
      },
    },
  },
});

export default UserQuery;

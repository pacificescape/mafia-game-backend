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
  name: 'UserQuery',
  fields: {
    getUserById: {
      type: userGraphQLType,
      args: { id: { type: GraphQLString } },
      resolve(_, args) {
        return User.findById(args.id);
      },
    },
    getUserByName: {
      type: userGraphQLType,
      args: { name: { type: GraphQLString } },
      resolve(_, args) {
        return User.findOne({ name: args.name });
      },
    },
    getUsers: {
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

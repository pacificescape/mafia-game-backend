import { GraphQLString, GraphQLObjectType, GraphQLSchema } from 'graphql';
import userGraphQLType from './user.type';
import User from '../models/user.model';

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
  },
});

export default new GraphQLSchema({
  query: UserQuery,
});

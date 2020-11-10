import { GraphQLString, GraphQLObjectType, GraphQLSchema } from 'graphql';
import userGraphQLType from './user.schema';
import User from '../models/user.model';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: userGraphQLType,
      args: { id: { type: GraphQLString } },
      resolve(_, args) {
        return User.findById(args.id);
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});

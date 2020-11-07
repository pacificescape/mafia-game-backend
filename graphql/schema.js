import graphql from 'graphql';
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = graphql;

import userGraphQLType from './userType.js';
import User from '../models/User.js';

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

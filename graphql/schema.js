const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');
const userGraphQLType = require('./userType');
const User = require('../models/User');

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

module.exports = new GraphQLSchema({
  query: RootQuery,
});

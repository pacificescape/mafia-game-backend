import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';

const LoginType = new GraphQLObjectType({
  name: 'Login',
  fields: () => ({
    token: { type: GraphQLString },
    refreshToken: { type: GraphQLString },
    status: { type: GraphQLInt },
  }),
});

export default LoginType;

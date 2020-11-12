import { GraphQLBoolean, GraphQLObjectType, GraphQLString } from 'graphql';

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    login: { type: GraphQLString },
    password: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    isAdmin: { type: GraphQLBoolean },
    isLogged: { type: GraphQLBoolean },
  }),
});

export default UserType;

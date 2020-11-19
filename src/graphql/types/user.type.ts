import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

export const UserType: GraphQLObjectType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    login: { type: GraphQLString },
    password: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    isAdmin: { type: GraphQLBoolean },
    isLogged: { type: GraphQLBoolean },
  }),
});

export const PlayerType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Player',
  fields: () => ({}),
});

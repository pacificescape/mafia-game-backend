import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';

export const GameType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Game',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    players: { type: new GraphQLList(PlayerType) },
  }),
});

export const PlayerType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Player',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    players: { type: new GraphQLList(PlayerType) },
  }),
});

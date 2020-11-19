import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID,
} from 'graphql';

export const GameType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Game',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    players: { type: new GraphQLList(PlayerType) },
  }),
});

export const PlayerType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Player',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    players: { type: new GraphQLList(PlayerType) },
  }),
});

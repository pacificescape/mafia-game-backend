import { GraphQLBoolean, GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import { extendSchema } from 'graphql/utilities'
import { UserType } from './user.type';

export const GameType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Game',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    players: { type: new GraphQLList(PlayerType) }
  })
})

export const PlayerType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Player',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    players: { type: new GraphQLList(PlayerType) }
  })
})

import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID,
  GraphQLBoolean,
} from 'graphql';

export const LobbyType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Lobby',
  fields: () => ({
    id: { type: GraphQLID },
    players: { type: new GraphQLList(PlayerType) },
    messages: { type: new GraphQLList(PlayerType) },
  }),
});

export const PlayerType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Player',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    login: { type: GraphQLString },
    password: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    isAdmin: { type: GraphQLBoolean },
    isLogged: { type: GraphQLBoolean },
    isAlive: { type: GraphQLBoolean },
    hasShield: { type: GraphQLBoolean },
    isPeaceful: { type: GraphQLBoolean },
  }),
});

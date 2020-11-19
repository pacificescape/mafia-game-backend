import { GraphQLObjectType, GraphQLID } from 'graphql';
import { LobbyType } from '../types/lobby.type';

const LobbyQuery: GraphQLObjectType = new GraphQLObjectType({
  description: 'Query to interact with `Lobby` collection',
  name: 'LobbyQuery',
  fields: {
    getLobbyById: {
      description: 'Returns a `Lobby` where `Lobby.id = id` in database.',
      type: LobbyType,
      args: { id: { type: GraphQLID } },
      resolve(_, { id }, ctx) {
        return ctx.koa.db.Lobby.findById(id);
      },
    },
  },
});

export default LobbyQuery;

import { GraphQLString, GraphQLObjectType } from 'graphql';
import { UserType } from '../types/user.type';
import lobbyService from '../../service/game/games';

const LobbyQuery: GraphQLObjectType = new GraphQLObjectType({
  description: 'Query to interact with `Games` collection',
  name: 'LobbyQuery',
  fields: {
    getLobby: {
      description: 'Returns a list of active games.',
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve() {
        return lobbyService.get();
      },
    },
  },
});

export default LobbyQuery;

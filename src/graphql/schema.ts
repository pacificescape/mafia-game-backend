import { GraphQLSchema, GraphQLObjectType } from 'graphql';

// === mutations ===
import UserMutation from './mutations/user.mutation';

// === queries ===
import UserQuery from './queries/user.query';
import LobbyQuery from './queries/lobby.query';

const RootQuery: GraphQLObjectType = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    user: {
      type: UserQuery,
      resolve() {
        return UserQuery;
      },
    },
    lobby: {
      type: LobbyQuery,
      resolve() {
        return LobbyQuery
      }
    }
  },
})

const schema: GraphQLSchema = new GraphQLSchema({
  query: RootQuery,
  mutation: UserMutation,
});

export default schema;

import { GraphQLSchema } from 'graphql';

// === mutations ===
import UserMutation from './mutations/user.mutation';

// === queries ===
import UserQuery from './queries/user.query';

const schema: GraphQLSchema = new GraphQLSchema({
  query: UserQuery,
  mutation: UserMutation,
});

export default schema;

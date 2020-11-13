import { GraphQLSchema } from 'graphql';

// === queries ===
import UserQuery from './queries/user.query';

const schema = new GraphQLSchema({
  query: UserQuery,
});

export default schema;

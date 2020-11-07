import graphql from 'graphql';
const { GraphQLObjectType, GraphQLString } = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
});

export default UserType;

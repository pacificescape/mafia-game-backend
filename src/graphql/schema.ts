import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLInt,
} from 'graphql';
import userGraphQLType from './user.type';
import UserType from './user.type';

const UserQuery = new GraphQLObjectType({
  name: 'UserQuery',
  fields: {
    getUserById: {
      type: userGraphQLType,
      args: { id: { type: GraphQLString } },
      resolve(_, args, ctx) {
        return ctx.db.User.findById(args.id);
      },
    },
    getUserByName: {
      type: userGraphQLType,
      args: { name: { type: GraphQLString } },
      resolve(_, args, ctx) {
        return ctx.db.User.findOne({ name: args.name });
      },
    },
    getUsers: {
      type: new GraphQLList(UserType),
      args: { limit: { type: GraphQLInt } },
      async resolve(_, { limit }, ctx) {
        const user = ctx.db.User.find({}).limit(limit);
        return user;
      },
    },
  },
});

// const UserMutation = new GraphQLObjectType({
//   name: 'UserMutation',
//   fields: {},
// });

export default new GraphQLSchema({
  query: UserQuery,
  // mutation: UserMutation,
});

import { GraphQLBoolean, GraphQLObjectType, GraphQLString } from 'graphql';
import { UserType } from '../types/user.type';

const UserMutation = new GraphQLObjectType({
  description: 'Mutation to interact with `Users` collection.',
  name: 'UserMutation',
  fields: {
    addUser: {
      description: 'Creates and adds `User` document.',
      type: UserType,
      args: {
        name: { type: GraphQLString },
        login: { type: GraphQLString },
        password: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        isAdmin: { type: GraphQLBoolean },
        isLogged: { type: GraphQLBoolean },
      },
      resolve(_, args, ctx) {
        return new ctx.db.User(args).save();
      },
    },
    deleteUserById: {
      description:
        'Deletes `User` document from database where `User.id = id`.',
      type: UserType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(_, { id }, ctx) {
        return ctx.db.User.findByIdAndRemove(id);
      },
    },
    updateUserById: {
      description: 'Updates `User` document where `User.id = id`.',
      type: UserType,
      args: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        login: { type: GraphQLString },
        password: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        isAdmin: { type: GraphQLBoolean },
        isLogged: { type: GraphQLBoolean },
      },
      resolve(_, { id, ...args }, ctx) {
        return ctx.db.User.findByIdAndUpdate(id, { ...args });
      },
    },
  },
});

export default UserMutation;

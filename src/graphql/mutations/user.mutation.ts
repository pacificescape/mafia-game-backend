import { GraphQLBoolean, GraphQLObjectType, GraphQLString } from 'graphql';
import User from '../../models/user.model';
import UserType from '../types/user.type';

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
      resolve(_, args) {
        return new User(args).save();
      },
    },
    deleteUserById: {
      description:
        'Deletes `User` document from database where `User.id = id`.',
      type: UserType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(_, { id }) {
        return User.findByIdAndRemove(id);
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
      resolve(_, { id, ...args }) {
        return User.findByIdAndUpdate(id, { ...args });
      },
    },
  },
});

export default UserMutation;

import { Schema } from 'mongoose';

const UserSchema: Schema = new Schema(
  {
    name: String,
    login: String,
    password: String,
    isAdmin: Boolean,
    isLogged: Boolean,
  },
  {
    timestamps: true,
  },
);

export default UserSchema;

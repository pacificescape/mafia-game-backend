import mongoose, { Schema } from 'mongoose';

/*
  notice there is no ID. That's because Mongoose will assign
  an ID by default to all schemas
*/

const UserSchema: Schema = new Schema({
  name: String,
  login: String,
  password: String,
  updatedAt: String,
  createdAt: String,
  isAdmin: Boolean,
  isLogged: Boolean,
});

const User = mongoose.model('User', UserSchema);

export { User, UserSchema }

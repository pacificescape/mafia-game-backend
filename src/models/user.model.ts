import mongoose, { Schema } from 'mongoose';

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

export default User;

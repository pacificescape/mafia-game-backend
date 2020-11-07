import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/*
  notice there is no ID. That's because Mongoose will assign
  an ID by default to all schemas
*/

const UserSchema = new Schema({
  name: String,
});

export default mongoose.model('User', UserSchema);

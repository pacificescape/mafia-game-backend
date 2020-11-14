import mongoose, { Schema } from 'mongoose';

/*
  notice there is no ID. That's because Mongoose will assign
  an ID by default to all schemas
*/

const RefreshToken: Schema = new Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
  },
  token: String,
});

export default RefreshToken;

import mongoose, { Schema } from 'mongoose';

const MessageSchema: Schema = new Schema({
  userId: String,
  createdAt: String,
});

const Message = mongoose.model('Message', MessageSchema);

export default Message;

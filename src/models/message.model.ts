import { Schema } from 'mongoose';

const MessageSchema: Schema = new Schema(
  {
    userId: String,
  },
  { timestamps: true },
);

export default MessageSchema;

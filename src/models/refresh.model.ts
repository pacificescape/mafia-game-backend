import { Schema, SchemaTypes } from 'mongoose';

const RefreshToken: Schema = new Schema(
  {
    user: {
      type: SchemaTypes.ObjectId,
      ref: 'User',
    },
    token: String,
  },
  {
    timestamps: true,
  },
);

export default RefreshToken;

import { Schema } from 'mongoose';

const LobbySchema: Schema = new Schema({
  users: Array,
  messages: Array,
});

export default LobbySchema;

import mongoose, { Schema } from 'mongoose';

const LobbySchema: Schema = new Schema({
  users: Array,
  messages: Array,
});

const Lobby = mongoose.model('Lobby', LobbySchema);

export default Lobby;

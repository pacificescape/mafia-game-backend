import mongoose, { Schema } from 'mongoose';

const GameSchema: Schema = new Schema({
  users: Array,
  messages: Array,
});

const Game = mongoose.model('Game', GameSchema);

export default Game;

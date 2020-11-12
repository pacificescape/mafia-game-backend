import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

const uri: string = process.env.CONNECTION_STRING || '';

const initDB = () => {
  mongoose.connect(uri, {
    bufferCommands: false,
    bufferMaxEntries: 0,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  mongoose.connection.once('open', () => {
    console.log('Connected to database');
  });
};

export default initDB;

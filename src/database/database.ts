import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

const initDB = () => {
  mongoose.connect(process.env.CONNECTION_STRING || '', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.once('open', () => {
    console.log('Connected to database');
  });
};

export default initDB;

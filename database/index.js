import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const initDB = () => {
  mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.once('open', () => {
    console.log('connected to database');
  });
};

export default initDB;

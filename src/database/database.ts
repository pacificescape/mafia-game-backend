import { getCollections } from './models/index'
import mongoose from 'mongoose';
import { config } from 'dotenv';
config()
const collections = getCollections()

console.log('collections', collections)

const uri: string = process.env.CONNECTION_STRING || '';

const connection = mongoose.createConnection(uri, {
    bufferCommands: false,
    bufferMaxEntries: 0,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

connection.once('open', () => {
  console.log('Connected to database');
});

const db: { [key: string]: any } = {
  connection
}

Object.keys(collections).forEach((collectionName: string) => {
  db[collectionName] = connection.model(collectionName, collections[collectionName])
})

export default db

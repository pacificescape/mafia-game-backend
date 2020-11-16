import { getCollections } from '../models/index';
import { Connection, createConnection } from 'mongoose';
import { config } from 'dotenv';
import { IDb } from 'src/shared/interfaces/db.interface';
config();

const collections = getCollections();
const uri: string = process.env.CONNECTION_STRING || '';

const connection: Connection = createConnection(uri, {
  bufferCommands: false,
  bufferMaxEntries: 0,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const db: IDb = {
  connection,
};

Object.keys(collections).forEach((collectionName: string) => {
  db[collectionName] = connection.model(
    collectionName,
    collections[collectionName],
  );
});

export default db;

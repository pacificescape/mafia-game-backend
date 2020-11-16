import { Connection } from 'mongoose';

export type IDb = {
  [key: string]: any;
  connection: Connection;
};

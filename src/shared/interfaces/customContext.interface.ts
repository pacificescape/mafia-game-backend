import { IDb } from './db.interface';

export interface ICustomAppContext {
  db: IDb;
}

export interface ICustomAppState {
  db: string;
}

// https://stackoverflow.com/questions/43160598/adding-properties-to-koa2s-context-in-typescript

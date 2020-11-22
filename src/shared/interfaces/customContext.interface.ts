import { BaseContext } from 'koa';
import { IDb } from './db.interface';

export interface ICustomAppContext extends BaseContext {
  db: IDb;
  websocket: any;
}

export interface ICustomAppState {
  db: IDb;
  websocket: any;
}

// https://stackoverflow.com/questions/43160598/adding-properties-to-koa2s-context-in-typescript

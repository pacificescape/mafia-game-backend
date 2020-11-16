import { IBase } from './base.interface';
import { IMessage } from './message.interface';
import { IUser } from './user.interface';

export interface IGame extends IBase {
  readonly users: IUser[];
  readonly messages: IMessage[];
}

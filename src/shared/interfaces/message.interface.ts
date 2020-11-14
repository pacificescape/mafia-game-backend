import { IBase } from './base.interface';

export interface IMessage extends IBase {
  userId: number | string;
  createdAt: Date | string;
}

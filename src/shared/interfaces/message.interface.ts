import { IBase } from './base.interface';

export interface IMessage extends IBase {
  userId: number;
  createdAt: Date | string;
}

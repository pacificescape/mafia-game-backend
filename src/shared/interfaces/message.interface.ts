import { IBase } from './base.interface';

export interface IMessage extends IBase {
  readonly userId: number | string;
  readonly createdAt: Date | string;
}

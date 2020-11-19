import { IBase } from './base.interface';

export interface IMessage extends IBase {
  readonly userId: string;
  readonly createdAt: Date | string;
  readonly text: string;
}

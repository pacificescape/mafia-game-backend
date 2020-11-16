import { IBase } from './base.interface';

export interface IUser extends IBase {
  readonly name: string;
  readonly login: string;
  readonly password: string;
  readonly updatedAt: string;
  readonly createdAt: string;
  readonly isAdmin: boolean;
  readonly isLogged: boolean;
}

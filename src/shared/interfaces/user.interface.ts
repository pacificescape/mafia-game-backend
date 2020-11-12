import { IBase } from './base.interface';

export interface IUser extends IBase {
  name: string;
  login: string;
  password: string;
  updatedAt: string;
  createdAt: string;
  isAdmin: boolean;
  isLogged: boolean;
}

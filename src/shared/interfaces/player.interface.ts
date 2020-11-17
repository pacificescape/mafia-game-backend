import { ICharacterBase } from './characters/character-base.interface';
import { IUser } from './user.interface';

export interface IPlayer extends IUser, ICharacterBase {}

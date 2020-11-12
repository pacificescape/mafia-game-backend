import { ICharacterBase } from './character-base.interface';

export interface IManiac extends ICharacterBase {
  isPeaceful: false;
  killsCount: number;
}

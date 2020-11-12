import { ICharacterBase } from './character-base.interface';

export interface IProstitute extends ICharacterBase {
  isPeaceful: false;
  killsCount: number;
}

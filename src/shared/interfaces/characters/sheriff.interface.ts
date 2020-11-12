import { ICharacterBase } from './character-base.interface';

export interface ISheriff extends ICharacterBase {
  isPeaceful: false;
  killsCount: number;
}

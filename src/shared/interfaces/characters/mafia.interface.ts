import { ICharacterBase } from './character-base.interface';

export interface IMafia extends ICharacterBase {
  killsCount: number;
  isPeaceful: false;
}

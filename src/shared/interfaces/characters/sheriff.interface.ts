import { ICharacterBase } from './character-base.interface';

export interface ISheriff extends ICharacterBase {
  readonly killCounter: number;
}

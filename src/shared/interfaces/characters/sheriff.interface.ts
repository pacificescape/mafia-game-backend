import { ICharacterBase } from './character-base.interface';

export interface ISheriff extends ICharacterBase {
  readonly isPeaceful: false;
  readonly killsCount: number;
}

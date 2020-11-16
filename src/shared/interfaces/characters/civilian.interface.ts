import { ICharacterBase } from './character-base.interface';

export interface ICivilians extends ICharacterBase {
  readonly isPeaceful: true;
}

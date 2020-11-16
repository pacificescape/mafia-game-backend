import { ICharacterBase } from './character-base.interface';

export interface ICivilian extends ICharacterBase {
  readonly isPeaceful: true;
}

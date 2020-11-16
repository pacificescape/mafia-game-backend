import { ICharacterBase } from './character-base.interface';

export interface IManiac extends ICharacterBase {
  readonly isPeaceful: false;
  readonly killsCount: number;
}

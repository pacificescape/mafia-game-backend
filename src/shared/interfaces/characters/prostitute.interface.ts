import { ICharacterBase } from './character-base.interface';

export interface IProstitute extends ICharacterBase {
  readonly isPeaceful: false;
  readonly killsCount: number;
}

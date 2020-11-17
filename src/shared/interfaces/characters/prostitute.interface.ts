import { ICharacterBase } from './character-base.interface';

export interface IProstitute extends ICharacterBase {
  readonly loversCounter: number;
}

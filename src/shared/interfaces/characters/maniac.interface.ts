import { ICharacterBase } from './character-base.interface';

export interface IManiac extends ICharacterBase {
  readonly killCounter: number;
}

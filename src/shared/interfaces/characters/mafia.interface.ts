import { ICharacterBase } from './character-base.interface';

export interface IMafia extends ICharacterBase {
  readonly killCounter: number;
}

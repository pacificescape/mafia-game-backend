import { ICharacterBase } from './character-base.interface';

export interface IDoctor extends ICharacterBase {
  // if doc use his aid kit he can heal someone or himself and avoid death
  readonly healCounter: number;
}

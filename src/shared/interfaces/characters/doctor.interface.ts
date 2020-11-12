import { ICharacterBase } from './character-base.interface';

export interface IDoctor extends ICharacterBase {
  isPeaceful: true;
  // if doc use his aid kit he can heal someone or himself and avoid death
  hasAid: boolean;
}

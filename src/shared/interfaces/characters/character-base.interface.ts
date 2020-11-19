import { IBase } from '../base.interface';

export interface ICharacterBase extends IBase {
  readonly isAlive: boolean;
  // if doc use his aid kit he can heal someone or himself and avoid death
  readonly hasShield: boolean;
  // every character has `isPeaceful` prop, but every character also overrides this prop specifying type(strict true or strict false)
  readonly isPeaceful: boolean;
}

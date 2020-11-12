import { IBase } from '../base.interface';

export interface ICharacterBase extends IBase {
  isAlive: boolean;
  // if doc use his aid kit he can heal someone or himself and avoid death
  hasShield: boolean;
  // prostitute can kills players by infecting them with AIDS
  // for example: prostitute infects someone and then after 2 days he dies
  isSick: boolean;
}

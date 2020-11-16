import { ICharacterBase } from 'src/shared/interfaces/characters/character-base.interface';

export class Player implements ICharacterBase {
  public isAlive: boolean = false;
  public hasShield: boolean = false;
  public isSick: boolean = false;

  constructor(public readonly id: string | number) {}
}

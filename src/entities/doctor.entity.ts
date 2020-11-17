import { IDoctor } from 'src/shared/interfaces/characters/doctor.interface';
import { Character } from './character.entity';

export class Doctor extends Character implements IDoctor {
  constructor(private readonly _id: string) {
    super(_id);
  }

  private _healCounter: number = 0;

  public heal(character: Character): void {
    if (character.hasShield) {
      throw new Error('Cannot heal character with shield');
    }

    character.hasShield = true;
    this.healCounter += 1;
  }

  public get healCounter(): number {
    return this._healCounter;
  }

  public set healCounter(value: number) {
    this._healCounter = value;
  }
}

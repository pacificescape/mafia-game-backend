import { ISheriff } from 'src/shared/interfaces/characters/sheriff.interface';
import { Character } from './character.entity';

export class Sheriff extends Character implements ISheriff {
  constructor(private readonly _id: string) {
    super(_id);
  }

  private _killCounter: number = 0;

  public checkPeaceful(character: Character): boolean {
    return character.isPeaceful;
  }

  public killCharacter(character: Character): void {
    if (character.hasShield) {
      throw new Error('Cannot kill character with shield');
    }

    character.isAlive = false;
    this.killCounter += 1;
  }

  public get killCounter(): number {
    return this._killCounter;
  }

  public set killCounter(value: number) {
    this._killCounter = value;
  }
}

import { IManiac } from 'src/shared/interfaces/characters/maniac.interface';
import { Character } from './character.entity';

export class Maniac extends Character implements IManiac {
  constructor(private readonly _id: string) {
    super(_id);
  }

  private _killCounter: number = 0;

  public kill(character: Character): void {
    if (character.hasShield) {
      throw new Error('Cannot kill character with shield.');
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

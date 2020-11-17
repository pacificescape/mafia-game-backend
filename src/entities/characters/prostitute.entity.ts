import { IProstitute } from 'src/shared/interfaces/characters/prostitute.interface';
import { Character } from './character.entity';
import { Mafia } from './mafia.entity';

export class Prostitute extends Character implements IProstitute {
  constructor(private readonly _id: string) {
    super(_id);
  }

  private _loversCounter: number = 0;

  public sleepWithCharacter(character: Character): void {
    if (character instanceof Mafia) {
      throw new Error(
        'Mafia instance cannot vote when when sleeps with prostitute',
      );
    }

    character.hasShield = true;
    this.loversCounter += 1;
  }

  public get loversCounter(): number {
    return this._loversCounter;
  }
  public set loversCounter(value: number) {
    this._loversCounter = value;
  }
}

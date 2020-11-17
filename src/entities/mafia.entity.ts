import { IMafia } from 'src/shared/interfaces/characters/mafia.interface';
import { Character } from './character.entity';

export class Mafia extends Character implements IMafia {
  constructor(private readonly _id: string) {
    super(_id);
  }

  private _killCounter: number = 0;

  private murderVote(character: Character): void {
    throw new Error('murderVote method in ' + this.constructor.name);
  }

  public vote(character: Character): void {
    this.murderVote(character);
  }

  public get killCounter(): number {
    return this._killCounter;
  }

  public set killCounter(value: number) {
    this._killCounter = value;
  }
}

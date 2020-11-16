import { ISheriff } from 'src/shared/interfaces/characters/sheriff.interface';
import { Character } from './character.entity';

export class Sheriff extends Character implements ISheriff {
  constructor(private readonly _id: string) {
    super(_id);
  }

  public isPeaceful: false = false;
  public killsCount: number = 0;
}

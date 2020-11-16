import { IMafia } from 'src/shared/interfaces/characters/mafia.interface';
import { Character } from './character.entity';

export class Mafia extends Character implements IMafia {
  constructor(private readonly _id: string) {
    super(_id);
  }

  killsCount: number = 0;
  isPeaceful: false = false;
}

import { IManiac } from 'src/shared/interfaces/characters/maniac.interface';
import { Character } from './character.entity';

export class Maniac extends Character implements IManiac {
  constructor(private readonly _id: string) {
    super(_id);
  }

  isPeaceful: false = false;
  killsCount: number = 0;
}

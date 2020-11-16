import { IDoctor } from 'src/shared/interfaces/characters/doctor.interface';
import { Character } from './character.entity';

export class Doctor extends Character implements IDoctor {
  constructor(private readonly _id: string) {
    super(_id);
  }

  isPeaceful: true = true;
  hasAid: boolean = false;
}

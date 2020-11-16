import { IDoctor } from 'src/shared/interfaces/characters/doctor.interface';
import { Character } from './character.entity';

export class Doctor extends Character implements IDoctor {
  constructor(private readonly _id: string) {
    super(_id);
  }

  public isPeaceful: true = true;
  public hasAid: boolean = false;
}

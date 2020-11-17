import { IBase } from './base.interface';
import { IMessage } from './message.interface';
import { IPlayer } from './player.interface';

export interface IGame extends IBase {
  readonly players: IPlayer[];
  readonly messages: IMessage[];
}

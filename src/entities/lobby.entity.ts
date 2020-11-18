import { IGame } from 'src/shared/interfaces/game.interface';
import { IMessage } from 'src/shared/interfaces/message.interface';
import { IPlayer } from 'src/shared/interfaces/player.interface';

/// @name Lobby
/// Lobby a.k.a Game
/// Contains N players in `players` field
/// Contains N user messages in `messages` field
/// @implements {IGame}
export class Lobby implements IGame {
  constructor(private readonly _id: string) {}

  private _players: IPlayer[] = [];
  private _messages: IMessage[] = [];
  private readonly _minPlayers: number = 7;
  private readonly _maxPlayers: number = 16;

  private static countPlayers(lobby: Lobby): number {
    return lobby.players.length;
  }

  private static countAlivePlayers(lobby: Lobby): number {
    return lobby.players.filter((player: IPlayer) => player.isAlive).length;
  }

  private static countDeadPlayers(lobby: Lobby): number {
    return lobby.players.filter((player: IPlayer) => !player.isAlive).length;
  }

  public get id(): string {
    return this._id;
  }

  public get players(): IPlayer[] {
    return this._players;
  }
  public set players(value: IPlayer[]) {
    this._players = value;
  }

  public get messages(): IMessage[] {
    return this._messages;
  }

  public set messages(value: IMessage[]) {
    this._messages = value;
  }

  public get minPlayers(): number {
    return this._minPlayers;
  }

  public get maxPlayers(): number {
    return this._maxPlayers;
  }
}

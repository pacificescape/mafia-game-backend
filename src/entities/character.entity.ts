import { ICharacterBase } from 'src/shared/interfaces/characters/character-base.interface';

export abstract class Character implements ICharacterBase {
  private _isAlive: boolean = false;
  private _hasShield: boolean = false;
  private _isSick: boolean = false;

  constructor(public readonly id: string) {}

  public get isAlive(): boolean {
    return this._isAlive;
  }

  public set isAlive(value: boolean) {
    this._isAlive = value;
  }

  public get hasShield(): boolean {
    return this._hasShield;
  }

  public set hasShield(value: boolean) {
    this._hasShield = value;
  }

  public get isSick(): boolean {
    return this._isSick;
  }

  public set isSick(value: boolean) {
    this._isSick = value;
  }
}

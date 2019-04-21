import {PrivateInfo} from './privateInfo.model';
import {Favorite} from './favorite.model';

export class User {
  private _username: string;
  private _password: string;
  private _created: string;
  private _privateInfo: PrivateInfo;
  private _favorite: Favorite[];
  private _PersonalRecipes: string[];

  constructor(username: string, password: string, created: string, privateInfo: PrivateInfo, favorite: Favorite[], PersonalRecipes: string[]) {
    this._username = username;
    this._password = password;
    this._created = created;
    this._privateInfo = privateInfo;
    this._favorite = favorite;
    this._PersonalRecipes = PersonalRecipes;
  }


  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get created(): string {
    return this._created;
  }

  set created(value: string) {
    this._created = value;
  }

  get privateInfo(): PrivateInfo {
    return this._privateInfo;
  }

  set privateInfo(value: PrivateInfo) {
    this._privateInfo = value;
  }

  get favorite(): Favorite[] {
    return this._favorite;
  }

  set favorite(value: Favorite[]) {
    this._favorite = value;
  }

  get PersonalRecipes(): string[] {
    return this._PersonalRecipes;
  }

  set PersonalRecipes(value: string[]) {
    this._PersonalRecipes = value;
  }
}

import {Favorite} from './favorite.model';
import {PersonalRecipes} from './personalRecipes';

export class User {
  private _username: string;
  private _password: string;
  private _created: string;
  private _favorite: Favorite[];
  private _PersonalRecipes: PersonalRecipes[];

  constructor(username: string, password: string, created: string, favorite: Favorite[], PersonalRecipes: PersonalRecipes[]) {
    this._username = username;
    this._password = password;
    this._created = created;
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

  get favorite(): Favorite[] {
    return this._favorite;
  }

  set favorite(value: Favorite[]) {
    this._favorite = value;
  }

  get PersonalRecipes(): PersonalRecipes[] {
    return this._PersonalRecipes;
  }

  set PersonalRecipes(value: PersonalRecipes[]) {
    this._PersonalRecipes = value;
  }
}

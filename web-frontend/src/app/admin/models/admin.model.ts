import {PersonalRecipe} from '../../user/models/personalRecipe';

export class Admin {
  private _username: string;
  private _password: string;
  private _created: string;
  private _personalRecipes: PersonalRecipe[];

  constructor(username: string, password: string, created: string, personalRecipes: PersonalRecipe[]) {
    this._username = username;
    this._password = password;
    this._created = created;
    this._personalRecipes = personalRecipes;
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

  get personalRecipes(): PersonalRecipe[] {
    return this._personalRecipes;
  }

  set personalRecipes(value: PersonalRecipe[]) {
    this._personalRecipes = value;
  }
}

import {Favorite} from './favorite.model';
import {PersonalRecipe} from './personalRecipe';
import {PrivateInfo} from './privateInfo';

export class User {
  private _id: string;
  private _username: string;
  private _password: string;
  private _created: string;
  private _isAdmin = false;
  private _PrivateInfo: PrivateInfo;
  private _favorite: Favorite[];
  private _PersonalRecipes: PersonalRecipe[];

  constructor(username: string, password: string, created: string, isAdmin: boolean, PrivateInfo: PrivateInfo, favorite: Favorite[], PersonalRecipes: PersonalRecipe[]) {
    this._username = username;
    this._password = password;
    this._created = created;
    this._isAdmin = isAdmin;
    this.PrivateInfo = PrivateInfo;
    this._favorite = favorite;
    this._PersonalRecipes = PersonalRecipes;
  }

  get PrivateInfo(): PrivateInfo {
    return this._PrivateInfo;
  }

  set PrivateInfo(value: PrivateInfo) {
    this._PrivateInfo = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
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

  get PersonalRecipes(): PersonalRecipe[] {
    return this._PersonalRecipes;
  }

  set PersonalRecipes(value: PersonalRecipe[]) {
    this._PersonalRecipes = value;
  }

  get isAdmin(): boolean {
    return this._isAdmin;
  }

  set isAdmin(value: boolean) {
    this._isAdmin = value;
  }
}

import {Photo} from './photo.model';

export class Recipe {
  private _id: number;
  private _title: string;
  private _created: string;
  private _category: string;
  private _photo: Photo;
  private _preptime: string;
  private _cooktime: string;
  private _description: string;
  private _ingredients: string[];
  private _directions: string[];
  private _favorite: string[];
  private _totallikes: number;
  private _author: string;

  constructor(title: string, created: string, category: string, photo: Photo, preptime: string, cooktime: string, description: string, ingredients: string[], directions: string[], favorite: string[], totallikes: number, author: string) {
    this._title = title;
    this._created = created;
    this._category = category;
    this._photo = photo;
    this._preptime = preptime;
    this._cooktime = cooktime;
    this._description = description;
    this._ingredients = ingredients;
    this._directions = directions;
    this._favorite = favorite;
    this._totallikes = totallikes;
    this._author = author;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get created(): string {
    return this._created;
  }

  set created(value: string) {
    this._created = value;
  }

  get category(): string {
    return this._category;
  }

  set category(value: string) {
    this._category = value;
  }

  get photo(): Photo {
    return this._photo;
  }

  set photo(value: Photo) {
    this._photo = value;
  }

  get preptime(): string {
    return this._preptime;
  }

  set preptime(value: string) {
    this._preptime = value;
  }

  get cooktime(): string {
    return this._cooktime;
  }

  set cooktime(value: string) {
    this._cooktime = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get ingredients(): string[] {
    return this._ingredients;
  }

  set ingredients(value: string[]) {
    this._ingredients = value;
  }

  get directions(): string[] {
    return this._directions;
  }

  set directions(value: string[]) {
    this._directions = value;
  }

  get favorite(): string[] {
    return this._favorite;
  }

  set favorite(value: string[]) {
    this._favorite = value;
  }

  get totallikes(): number {
    return this._totallikes;
  }

  set totallikes(value: number) {
    this._totallikes = value;
  }

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }
}

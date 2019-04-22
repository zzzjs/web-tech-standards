import {Photo} from './photo.model';

export class SubmitRecipe {
  public title: string;
  public url: string;
  public description: string;
  public ingredients: string[];
  public directions: string[];
  public preptime: string;
  public cooktime: string;
  public category: string;
  public author: string;

  constructor(title: string, url: string, description: string, ingredients: string[], directions: string[], preptime: string, cooktime: string, category: string, author: string) {
    this.title = title;
    this.url = url;
    this.description = description;
    this.ingredients = ingredients;
    this.directions = directions;
    this.preptime = preptime;
    this.cooktime = cooktime;
    this.category = category;
    this.author = author;
  }
}

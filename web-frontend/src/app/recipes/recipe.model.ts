export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: string[];
  public directions: string[];

  constructor(name: string, desc: string, imagePath: string, ingredients: string[], directions: string[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
    this.directions = directions;
  }
}

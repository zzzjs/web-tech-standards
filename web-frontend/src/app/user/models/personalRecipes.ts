export class PersonalRecipes {
  public recipeid: string;
  public title: string;

  constructor(recipeid: string, title: string) {
    this.recipeid = recipeid;
    this.title = title;
  }
}

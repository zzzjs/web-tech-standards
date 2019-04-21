import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/models/recipe.model';

@Injectable()
export class NetConnectService {
  constructor(private httpClient: HttpClient, private recipeService: RecipeService) {}

  getRecipes() {
    this.httpClient.get('https://cors-anywhere.herokuapp.com/' + 'https://modern-ruby.glitch.me/recipes')
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.storeRecipes(recipes);
        console.log('received ' + recipes.length);
      }, error1 => {
        console.log(error1);
      });
  }

}

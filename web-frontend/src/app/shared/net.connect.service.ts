import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/models/recipe.model';
import {SubmitRecipe} from '../recipes/models/submit.recipe.model';
import {Service_HostName} from './constants';
import {Router} from '@angular/router';
import {UserService} from '../user/user.service';

@Injectable()
export class NetConnectService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private userService: UserService,
              private router: Router) {}

  getRecipes() {
    this.httpClient.get('https://modern-ruby.glitch.me/recipes')
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.storeRecipes(recipes);
        console.log('received ' + recipes.length);
      }, error1 => {
        console.log(error1);
      });
  }

  getRecipeById(recipeid: string) {
    console.log(Service_HostName + '/recipe/' + recipeid);
    return this.httpClient.get(Service_HostName + '/recipe/' + recipeid);
  }

  submitRecipe(value: SubmitRecipe) {
    console.log(value);
    this.httpClient.post(Service_HostName + '/upload', value)
      .subscribe((recipe: Recipe) => {
        this.recipeService.addRecipe(recipe);
        this.userService.addMyRecipe(recipe);
        console.log('submited: ' + recipe);
        this.router.navigate(['../']);
      }, error1 => {
        console.log(error1);
      });
  }

  updateRecipe(value: any) {
    console.log(value);
    this.httpClient.put(Service_HostName + '/recipe', value)
      .subscribe((recipe: Recipe) => {
        console.log('recipeUpdated');
        console.log(recipe);
        this.recipeService.updateRecipe(recipe, value.id);
        this.router.navigate(['/user/my-recipes']);
      }, error1 => {
        console.log(error1);
      });
  }

  addFavorite(value: any) {
    console.log(value);
    console.log(value.user);
    this.httpClient.post(Service_HostName + '/favorite', value)
      .subscribe((data) => {
          console.log(data);
          this.recipeService.addFavorite(value.id);
          this.userService.addFavorite({recipeid: value.id, title: value.title});
      }, error1 => {
        console.log(error1);
      });
  }

  removeFavorite(value: any) {
    console.log(value);
    console.log(value.user);
    this.httpClient.post(Service_HostName + '/favorite', value)
      .subscribe((data) => {
        console.log(data);
        this.recipeService.removeFavorite(value.id);
        this.userService.removeFavorite({recipeid: value.id, title: value.title});
        // this.router.navigate(['/']);
      }, error1 => {
        console.log(error1);
      });
  }

  deleteRecipe(value: any) {
    console.log('delete - ' + value.id);
    console.log(value);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: value
    };
    this.httpClient.delete(Service_HostName + '/recipe', httpOptions)
      .subscribe((data) => {
        console.log(data);
        this.recipeService.removeRecipe(value.id);
        this.userService.removeMyRecipe(value.id);
      }, error1 => {
        console.log(error1);
      });
  }

}

import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Recipe} from './models/recipe.model';
import {LocalStorageService} from '../shared/local.storage.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  searchResult = new Subject<Recipe[]>();

  private recipes: Recipe[] = [];
  private searchRecipes: Recipe[] = [];

  constructor(private localStorageService: LocalStorageService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getSearchRecipes() {
    return this.searchRecipes.slice();
  }

  getRecipe(index: string) {
    let temp: Recipe;
    this.recipes.forEach((recipe) => {
      if (recipe.id === index) { temp = recipe; }
    });
    return temp;
  }

  storeRecipes(recipes: Recipe[]) {
    console.log('store recipes');
    if (recipes == null) { return; }
    this.recipes = [];
    this.recipes = recipes;
    const jsonData = JSON.parse(JSON.stringify(recipes));
    for (let i = 0; i < recipes.length; i++) {
      this.recipes[i].id = jsonData[i]._id;
    }
    this.recipesChanged.next(this.recipes.slice());
    this.localStorageService.storeRecipes(this.recipes.slice());
  }

  addRecipe(recipe: Recipe) {
    const jsonData = JSON.parse(JSON.stringify(recipe));
    recipe.id = jsonData._id;
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }


  removeRecipe(recipeId: string) {
    for (let i = 0; i < this.recipes.length; i++) {
      if (this.recipes[i].id === recipeId) {
        this.recipes.splice(i, 1);
        break;
      }
    }
    this.recipesChanged.next(this.recipes.slice());
  }

  addFavorite(recipeId: string) {
    for (let i = 0; i < this.recipes.length; i++) {
      if (this.recipes[i].id === recipeId) { this.recipes[i].totallikes += 1; }
    }
  }

  removeFavorite(recipeId: string) {
    for (let i = 0; i < this.recipes.length; i++) {
      if (this.recipes[i].id === recipeId) { this.recipes[i].totallikes -= 1; }
    }
  }

  updateRecipe(recipe: Recipe, recipeId: string) {
    console.log(recipe);
    for (let i = 0; i < this.recipes.length; i++) {
      console.log(this.recipes[i].id + '  ' + recipeId);
      if (this.recipes[i].id === recipeId) {
        console.log(this.recipes[i]);
        this.recipes[i] = recipe;
        this.recipes[i].id = recipeId;
        console.log(this.recipes[i]);
        break;
      }
    }
    this.recipesChanged.next(this.recipes.slice());
  }

  storeSearchResult(recipes: Recipe[]) {
    this.searchRecipes = [];
    this.searchRecipes = recipes;
    const jsonData = JSON.parse(JSON.stringify(recipes));
    for (let i = 0; i < recipes.length; i++) {
      this.searchRecipes[i].id = jsonData[i]._id;
    }
    this.searchResult.next(this.searchRecipes.slice());
  }
}

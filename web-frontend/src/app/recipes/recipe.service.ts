import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Recipe} from './models/recipe.model';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: string) {
    let temp: Recipe;
    this.recipes.forEach((recipe) => {
      if (recipe.id === index) { temp = recipe; }
    });
    return temp;
  }

  storeRecipes(recipes: Recipe[]) {
    this.recipes = [];
    this.recipes = recipes;
    const jsonData = JSON.parse(JSON.stringify(recipes));
    for (let i = 0; i < recipes.length; i++) {
      this.recipes[i].id = jsonData[i]._id;
    }
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
}

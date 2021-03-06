import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {User} from './models/user.model';
import {Recipe} from '../recipes/models/recipe.model';
import {LocalStorageService} from '../shared/local.storage.service';

@Injectable()
export class UserService {
  userChanged = new Subject<User>();
  private user: User;

  constructor(private localStorageService: LocalStorageService) {}

  storeUser(user: User) {
    if (user == null) { return; }
    const jsonData = JSON.parse(JSON.stringify(user));
    this.user = user;
    this.user.id = jsonData._id;
    this.userChanged.next(this.user);
    this.localStorageService.storeUser(this.user);
  }

  getUser() {
    return this.user;
  }

  getFavorites() {
    return this.user.favorite;
  }

  getPersonalRecipes() {
    return this.user.PersonalRecipes;
  }

  getFavorite(recipeId: string) {
    let temp = false;
    console.log('getFavorite');
    console.log(this.user);
    this.user.favorite.forEach((fa) => {
      if (fa.recipeid === recipeId) { temp = true; }
    });
    return temp;
  }

  addFavorite(recipe: any) {
    this.user.favorite.push(recipe);
    this.userChanged.next(this.user);
  }

  removeFavorite(recipe: any) {
    for (let i = 0; i < this.user.favorite.length; i++) {
      if (this.user.favorite[i].recipeid === recipe.recipeid) {
        this.user.favorite.splice(i, 1);
      }
    }
    this.userChanged.next(this.user);
  }

  removeMyRecipe(recipeId: string) {
    for (let i = 0; i < this.user.favorite.length; i++) {
      if (this.user.favorite[i].recipeid === recipeId) {
        this.user.favorite.splice(i, 1);
        break;
      }
    }
    for (let i = 0; i < this.user.PersonalRecipes.length; i++) {
      if (this.user.PersonalRecipes[i].recipeid === recipeId) {
        this.user.PersonalRecipes.splice(i, 1);
        break;
      }
    }
    this.userChanged.next(this.user);
  }

  addMyRecipe(recipe: Recipe) {
    const jsonData = JSON.parse(JSON.stringify(recipe));
    const data = {
      recipeid : jsonData._id,
      title : recipe.title
    };
    this.user.PersonalRecipes.push(data);
    this.userChanged.next(this.user);
  }
}

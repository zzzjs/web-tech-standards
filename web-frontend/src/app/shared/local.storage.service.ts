import {Injectable} from '@angular/core';
import {User} from '../user/models/user.model';
import {Recipe} from '../recipes/models/recipe.model';

@Injectable()
export class LocalStorageService {
  private token = 'token';
  private user = 'user';
  private recipes = 'recipes';
  private admin = 'admin';
  private isAdmin = 'isAdmin';

  public storeToken(token: string) {
    console.log('storeToken->ToLocal');
    localStorage.setItem(this.token, token);
  }

  public getTokenFromLocalStorage() {
    return localStorage.getItem(this.token);
  }

  public removeToken() {
    localStorage.removeItem(this.token);
  }

  public storeUser(user: User) {
    console.log('storeUser->ToLocal');
    localStorage.setItem(this.user, JSON.stringify(user));
  }

  public removeUser() {
    localStorage.removeItem(this.user);
  }

  public getUserFromLocalStorage() {
    return JSON.parse(localStorage.getItem(this.user));
  }

  public storeAdmin(user: User) {
    console.log('storeAdmin->ToLocal');
    localStorage.setItem(this.admin, JSON.stringify(user));
  }

  public removeAdmin() {
    localStorage.removeItem(this.admin);
  }

  public getAdminFromLocalStorage() {
    return JSON.parse(localStorage.getItem(this.admin));
  }

  public storeRecipes(recipes: Recipe[]) {
    console.log('storeRecipes->ToLocal');
    localStorage.setItem(this.recipes, JSON.stringify(recipes));
  }

  public removeRecipes() {
    localStorage.removeItem(this.recipes);
  }

  public getRecipesFromLocalStorage() {
    return JSON.parse(localStorage.getItem(this.recipes));
  }

  public storeIsAdmin(isAdmin: boolean) {
    console.log('storeIsAdmin->ToLocal');
    localStorage.setItem(this.isAdmin, String(isAdmin));
  }

  public getIsAdminFromLocalStorage() {
    return JSON.parse(localStorage.getItem(this.isAdmin));
  }

  public removeIsAdmin() {
    localStorage.removeItem(this.isAdmin);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/models/recipe.model';
import {SubmitRecipe} from '../recipes/models/submit.recipe.model';
import {Service_HostName} from './constants';
import {Router} from '@angular/router';
import {UserService} from '../user/user.service';
import {AdminService} from './services/admin.service';
import {User} from '../user/models/user.model';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class NetConnectService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private userService: UserService,
              private adminService: AdminService,
              private authService: AuthService,
              private router: Router) {}

  getRecipes() {
    this.httpClient.get('https://modern-ruby.glitch.me/recipes')
      .subscribe((recipes: Recipe[]) => {
        console.log('received ' + recipes.length);
        this.recipeService.storeRecipes(recipes);
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
        if (this.authService.isAdmin()) {
          this.router.navigate(['/admin/recipes']);
        } else {
          this.router.navigate(['/user/my-recipes']);
        }
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
        if (this.authService.isAdmin()) {
          this.recipeService.removeRecipe(value.id);
          this.adminService.deleteRecipe(value.id);
        } else {
          this.recipeService.removeRecipe(value.id);
          this.userService.removeMyRecipe(value.id);
        }
      }, error1 => {
        console.log(error1);
      });
  }

  searchRecipes(keywords: string) {
    console.log('search keyword: ' + keywords);
    this.httpClient.get(Service_HostName + '/search?search=' + keywords)
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.storeSearchResult(recipes);
        this.router.navigate(['/search/' + keywords]);
        console.log(recipes);
      }, error1 => {
        console.log(error1);
      });
  }

  getUsers() {
    this.httpClient.get(Service_HostName + '/users')
      .subscribe((users: User[]) => {
        this.adminService.storeUsers(users);
        console.log(users);
      }, error1 => {
        console.log(error1);
      });
  }

  deleteUser(value: any) {
    console.log('delete - ' + value.id);
    console.log(value);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: value
    };
    this.httpClient.delete(Service_HostName + '/user', httpOptions)
      .subscribe((user: User) => {
        console.log(user);
        this.adminService.deleteUser(value);
      }, error1 => {
        console.log(error1);
      });
  }

  updateAccount(data: any) {
    console.log(data);
    this.httpClient.put(Service_HostName + '/user', data)
      .subscribe((user: User) => {
        console.log(user);
        if (this.authService.isAdmin()) {
          this.adminService.storeAdmin(user);
          this.router.navigate(['/admin']);
        } else {
          this.userService.storeUser(user);
          this.router.navigate(['/user']);
        }
      }, error1 => {
        console.log(error1);
      });
  }

}

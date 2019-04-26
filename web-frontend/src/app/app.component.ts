import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {LocalStorageService} from './shared/local.storage.service';
import {AuthService} from './auth/auth.service';
import {UserService} from './user/user.service';
import {RecipeService} from './recipes/recipe.service';
import {AdminService} from './shared/services/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked {
  title = 'web-frontend';

  constructor(private localStorageService: LocalStorageService,
              private authService: AuthService,
              private userService: UserService,
              private recipesService: RecipeService,
              private adminService: AdminService) {
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.authService.setToken(this.localStorageService.getTokenFromLocalStorage());
    console.log('read token from local storage: ' + this.localStorageService.getTokenFromLocalStorage());
    this.adminService.storeAdmin(this.localStorageService.getAdminFromLocalStorage());
    console.log('read admin from local storage: ' + this.localStorageService.getAdminFromLocalStorage());
    this.authService.setAdmin(this.localStorageService.getIsAdminFromLocalStorage());
    console.log('read isAdmin from local storage: ' + this.localStorageService.getIsAdminFromLocalStorage());
    this.userService.storeUser(this.localStorageService.getUserFromLocalStorage());
    console.log('read user from local storage: ' + this.localStorageService.getUserFromLocalStorage());
    this.recipesService.storeRecipes(this.localStorageService.getRecipesFromLocalStorage());
    console.log('read recipes from local storage: ' + this.localStorageService.getRecipesFromLocalStorage());
  }
}

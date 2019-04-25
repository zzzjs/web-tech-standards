import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../../user/models/user.model';
import {AdminService} from '../../../shared/services/admin.service';
import {Subscription} from 'rxjs';
import {Recipe} from '../../../recipes/models/recipe.model';
import {RecipeService} from '../../../recipes/recipe.service';
import {PersonalRecipe} from '../../../user/models/personalRecipe';

@Component({
  selector: 'app-account-all-recipes',
  templateUrl: './account-all-recipes.component.html',
  styleUrls: ['./account-all-recipes.component.css']
})
export class AccountAllRecipesComponent implements OnInit, OnDestroy {

  users: User[] = [];
  selectedOption: any;
  subscription: Subscription;
  recipes: Recipe[] = [];

  constructor(private adminService: AdminService,
              private recipeService: RecipeService) { }

  ngOnInit() {
    this.subscription = this.adminService.usersChanged
      .subscribe((users: User[]) => {
        this.users = users;
      });
    this.users = this.adminService.getUsers();
    console.log(this.users);
  }

  checkUserRecipes() {
    this.recipes = [];
    console.log(this.selectedOption);
    this.users.forEach((user: User) => {
      if (user.username === this.selectedOption) {
        user.PersonalRecipes.forEach((personalRecipe: PersonalRecipe) => {
            this.recipes.push(this.recipeService.getRecipe(personalRecipe.recipeid));
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

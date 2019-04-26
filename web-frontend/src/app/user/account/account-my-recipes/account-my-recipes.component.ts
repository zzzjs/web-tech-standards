import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../user.service';
import {PersonalRecipe} from '../../models/personalRecipe';
import {NetConnectService} from '../../../shared/net.connect.service';
import {Recipe} from '../../../recipes/models/recipe.model';
import {RecipeService} from '../../../recipes/recipe.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-account-my-recipes',
  templateUrl: './account-my-recipes.component.html',
  styleUrls: ['./account-my-recipes.component.css']
})
export class AccountMyRecipesComponent implements OnInit, OnDestroy {
  personalRecipes: PersonalRecipe[];
  myRecipes: Recipe[] = [];
  subscription: Subscription;
  constructor(private router: Router,
              private userService: UserService,
              private netService: NetConnectService,
              private recipeService: RecipeService) { }

  ngOnInit() {
    this.subscription = this.userService.userChanged
      .subscribe(() => {
        this.getMyRecipes();
      });
    this.getMyRecipes();
    console.log(this.personalRecipes);
  }

  getMyRecipes() {
    this.myRecipes = [];
    this.personalRecipes = this.userService.getPersonalRecipes();
    this.personalRecipes.forEach( (personalRecipe) => {
      this.myRecipes.push(this.recipeService.getRecipe(personalRecipe.recipeid));
    });
  }

  onNewRecipe() {
    this.router.navigate(['/submit-a-recipe']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

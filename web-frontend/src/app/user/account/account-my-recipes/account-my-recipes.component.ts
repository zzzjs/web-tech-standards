import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../user.service';
import {Favorite} from '../../models/favorite.model';
import {Photo} from '../../../recipes/models/photo.model';
import {PersonalRecipes} from '../../models/personalRecipes';
import {NetConnectService} from '../../../shared/net.connect.service';
import {Recipe} from '../../../recipes/models/recipe.model';
import {RecipeService} from '../../../recipes/recipe.service';

@Component({
  selector: 'app-account-my-recipes',
  templateUrl: './account-my-recipes.component.html',
  styleUrls: ['./account-my-recipes.component.css']
})
export class AccountMyRecipesComponent implements OnInit {
  personalRecipes: PersonalRecipes[];
  personalRecipePhotos: Photo[] = [];
  recipes: Recipe[] = [];
  constructor(private router: Router,
              private userService: UserService,
              private netService: NetConnectService,
              private recipeService: RecipeService) { }

  ngOnInit() {
    this.personalRecipes = this.userService.getPersonalRecipes();
    console.log(this.personalRecipes.length);
    // this.personalRecipes.forEach((personalRecipe) => {
    //   this.netService.getRecipeById(personalRecipe.recipeid)
    //     .subscribe((recipe: Recipe) => {
    //       this.recipes.push(recipe);
    //     }, error1 => {
    //       console.log(error1);
    //     });
    // });
    this.personalRecipes.forEach( (personalRecipe) => {
      this.recipes.push(this.recipeService.getRecipe(personalRecipe.recipeid));
    });
  }

  onNewRecipe() {
    this.router.navigate(['/submit-a-recipe']);
  }
}

import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../../../recipes/recipe.service';
import {Recipe} from '../../../recipes/recipe.model';

@Component({
  selector: 'app-account-recipes-box',
  templateUrl: './account-recipes-box.component.html',
  styleUrls: ['./account-recipes-box.component.css']
})
export class AccountRecipesBoxComponent implements OnInit {
  recipes: Recipe[];
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}

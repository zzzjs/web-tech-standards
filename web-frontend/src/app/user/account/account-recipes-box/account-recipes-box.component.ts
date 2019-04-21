import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../../../recipes/recipe.service';
import {Recipe} from '../../../recipes/models/recipe.model';
import {UserService} from '../../user.service';
import {Favorite} from '../../models/favorite.model';

@Component({
  selector: 'app-account-recipes-box',
  templateUrl: './account-recipes-box.component.html',
  styleUrls: ['./account-recipes-box.component.css']
})
export class AccountRecipesBoxComponent implements OnInit {
  recipes: Recipe[];
  favorite: Favorite[];
  constructor(private recipeService: RecipeService,
              private userService: UserService) { }

  ngOnInit() {
    this.favorite = this.userService.getFavorite();
  }

}

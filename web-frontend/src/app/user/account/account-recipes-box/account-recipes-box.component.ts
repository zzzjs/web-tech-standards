import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../../../recipes/recipe.service';
import {Recipe} from '../../../recipes/models/recipe.model';
import {UserService} from '../../user.service';
import {Favorite} from '../../models/favorite.model';
import {NetConnectService} from '../../../shared/net.connect.service';
import {Photo} from '../../../recipes/models/photo.model';

@Component({
  selector: 'app-account-recipes-box',
  templateUrl: './account-recipes-box.component.html',
  styleUrls: ['./account-recipes-box.component.css']
})
export class AccountRecipesBoxComponent implements OnInit {
  recipes: Recipe[];
  favorites: Favorite[];
  favoritePhotos: Photo[] = [];
  constructor(private recipeService: RecipeService,
              private userService: UserService,
              private netService: NetConnectService) { }

  ngOnInit() {
    this.getMyFavorites();
  }

  getMyFavorites() {
    this.favoritePhotos = [];
    this.favorites = this.userService.getFavorites();
    this.favorites.forEach( (favorite) => {
      const temp = this.recipeService.getRecipe(favorite.recipeid);
      temp.photo.title = temp.title;
      temp.photo.recipeId = temp.id;
      this.favoritePhotos.push(temp.photo);
    });
  }

}

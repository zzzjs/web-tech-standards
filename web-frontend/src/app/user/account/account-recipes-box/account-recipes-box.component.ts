import {Component, OnDestroy, OnInit} from '@angular/core';
import {RecipeService} from '../../../recipes/recipe.service';
import {Recipe} from '../../../recipes/models/recipe.model';
import {UserService} from '../../user.service';
import {Favorite} from '../../models/favorite.model';
import {Photo} from '../../../recipes/models/photo.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-account-recipes-box',
  templateUrl: './account-recipes-box.component.html',
  styleUrls: ['./account-recipes-box.component.css']
})
export class AccountRecipesBoxComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  favorites: Favorite[];
  favoritePhotos: Photo[] = [];
  subscription: Subscription;
  constructor(private recipeService: RecipeService,
              private userService: UserService) { }

  ngOnInit() {
    this.subscription = this.userService.userChanged
      .subscribe(() => {
        this.getMyFavorites();
      });
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

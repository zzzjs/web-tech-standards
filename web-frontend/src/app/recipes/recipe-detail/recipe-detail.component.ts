import { Component, OnInit } from '@angular/core';
import {Recipe} from '../models/recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UserService} from '../../user/user.service';
import {AuthService} from '../../auth/auth.service';
import {NetConnectService} from '../../shared/net.connect.service';
import {Subscription} from 'rxjs';
import {User} from '../../user/models/user.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  cookTime = '';
  prepTime = '';
  favorite = '';
  Auth: Boolean;
  subscription: Subscription;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute,
              private userService: UserService,
              private authService: AuthService,
              private netService: NetConnectService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = params['id'];
        console.log(this.id);
        this.recipe = this.recipeService.getRecipe(this.id + '');
        this.cookTime = this.recipe.cooktime;
        this.prepTime = this.recipe.preptime;
      });
    this.checkStatus();
    console.log(this.favorite);
    this.subscription = this.userService.userChanged
      .subscribe((user: User) => {
        this.checkStatus();
      });
  }

  checkStatus () {
    if (!this.authService.isAuthenticated()) {
      this.Auth = false;
    } else if (this.userService.getFavorite(this.recipe.id)) {
      this.Auth = true;
      this.favorite = 'unLike';
    } else {
      this.Auth = true;
      this.favorite = 'Like';
    }
  }

  changeFavorite() {
    const favorite = {
      id: this.recipe.id,
      title: this.recipe.title,
      user: this.userService.getUser()
    };
    if (this.favorite === 'Like') {
      console.log('like add');
      this.netService.addFavorite(favorite);
    } else {
      console.log('unLike remove');
      this.netService.removeFavorite(favorite);
    }
  }

}

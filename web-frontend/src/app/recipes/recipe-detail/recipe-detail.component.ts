import {Component, OnDestroy, OnInit} from '@angular/core';
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
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  id: number;
  cookTime = '';
  prepTime = '';
  favorite = '';
  href = '';
  fb_share = 'http://www.facebook.com/share.php?u=';
  tw_share = 'https://twitter.com/share?url=';
  pt_share = 'http://pinterest.com/pin/create/button/?url=';
  Auth: Boolean;
  subscription: Subscription;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute,
              private userService: UserService,
              private authService: AuthService,
              private netService: NetConnectService,
              ) { }

  ngOnInit() {
    this.href = document.location.href;
    this.fb_share += this.href;
    this.tw_share += this.href;
    this.pt_share += this.href;
    console.log(this.fb_share);
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
    console.log('isAdmin => ' + this.authService.isAdmin());
    if (!this.authService.isAuthenticated()) {
      this.Auth = false;
    } else if (!this.authService.isAdmin() && this.userService.getFavorite(this.recipe.id)) {
      this.Auth = true;
      this.favorite = 'unLike';
    } else {
      this.Auth = true;
      this.favorite = 'Like';
    }
  }

  changeFavorite() {
    if (this.authService.isAdmin()) {return; }
    const favorite = {
      id: this.recipe.id,
      title: this.recipe.title,
      user: this.userService.getUser()
    };
    if (this.favorite === 'Like') {
      this.netService.addFavorite(favorite);
    } else {
      this.netService.removeFavorite(favorite);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onPrint() {
    window.print();
  }
}

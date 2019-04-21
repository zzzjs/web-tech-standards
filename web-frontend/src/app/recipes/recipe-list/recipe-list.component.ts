import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Recipe} from '../models/recipe.model';
import {Subscription} from 'rxjs';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  zhejiang: Recipe[] = [];
  jiangsu: Recipe[] = [];
  hunan: Recipe[] = [];
  fujian: Recipe[] = [];
  anhui: Recipe[] = [];
  sichuan: Recipe[] = [];
  shandong: Recipe[] = [];
  cantonese: Recipe[] = [];
  subscription: Subscription;

  constructor(private recipeService: RecipeService,
              private router: Router) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
      .subscribe((recipes: Recipe[]) => {
        this.recipes = recipes;
        this.generateCategory();
      });
    this.recipes = this.recipeService.getRecipes();
    this.generateCategory();
  }

  generateCategory () {
    this.recipes.forEach((recipe) => {
      switch (recipe.category) {
        case 'zhejiang': this.zhejiang.push(recipe); break;
        case 'jiangsu': this.jiangsu.push(recipe); break;
        case 'hunan': this.hunan.push(recipe); break;
        case 'fujian': this.fujian.push(recipe); break;
        case 'anhui': this.anhui.push(recipe); break;
        case 'sichuan': this.sichuan.push(recipe); break;
        case 'shandong': this.shandong.push(recipe); break;
        case 'cantonese': this.cantonese.push(recipe); break;
        default: break;
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Recipe} from '../recipe.model';
import {Subscription} from 'rxjs';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  subscription: Subscription;

  constructor(private recipeService: RecipeService,
              private router: Router) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
      .subscribe((recipes: Recipe[]) => {
        this.recipes = recipes;
      });
    this.recipes = this.recipeService.getRecipes();
  }

}

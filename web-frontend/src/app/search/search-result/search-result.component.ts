import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from '../../recipes/models/recipe.model';
import {Subscription} from 'rxjs';
import {RecipeService} from '../../recipes/recipe.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit, OnDestroy {
  searchResult: Recipe[];
  subscription: Subscription;
  keywords: string;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.keywords = params['id'];
        console.log(this.keywords);
      });
    this.subscription = this.recipeService.searchResult
      .subscribe((recipes: Recipe[]) => {
        this.searchResult = recipes;
      });
    this.searchResult = this.recipeService.getSearchRecipes();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

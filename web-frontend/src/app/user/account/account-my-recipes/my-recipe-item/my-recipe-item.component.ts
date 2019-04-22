import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../../../recipes/models/recipe.model';

@Component({
  selector: 'app-my-recipe-item',
  templateUrl: './my-recipe-item.component.html',
  styleUrls: ['./my-recipe-item.component.css']
})
export class MyRecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}

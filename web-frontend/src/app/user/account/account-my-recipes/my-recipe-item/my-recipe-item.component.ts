import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../../../recipes/models/recipe.model';
import {NetConnectService} from '../../../../shared/net.connect.service';
import {UserService} from '../../../user.service';

@Component({
  selector: 'app-my-recipe-item',
  templateUrl: './my-recipe-item.component.html',
  styleUrls: ['./my-recipe-item.component.css']
})
export class MyRecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  constructor(private netService: NetConnectService,
              private userService: UserService) { }

  ngOnInit() {
  }

  onDeleteRecipe() {
    const recipe = {
      id: this.recipe.id,
      title: this.recipe.title,
      user: this.userService.getUser()
    };
    this.netService.deleteRecipe(recipe);
  }
}

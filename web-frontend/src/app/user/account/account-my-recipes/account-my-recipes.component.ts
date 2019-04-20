import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account-my-recipes',
  templateUrl: './account-my-recipes.component.html',
  styleUrls: ['./account-my-recipes.component.css']
})
export class AccountMyRecipesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNewRecipe() {
    this.router.navigate(['/submit-a-recipe']);
  }
}

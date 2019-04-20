import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {RecipeService} from '../../recipes/recipe.service';

@Component({
  selector: 'app-submit-a-recipe',
  templateUrl: './submit-a-recipe.component.html',
  styleUrls: ['./submit-a-recipe.component.css']
})
export class SubmitARecipeComponent implements OnInit {
  recipeForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute,
              private recipeServie: RecipeService) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    // this.recipeService.addRecipe(this.recipeForm.value);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  private initForm() {
    const recipeName = '';
    const recipeImagePath = '';
    const recipeDescription = '';
    const recipeIngredients = new FormArray([]);

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }
}

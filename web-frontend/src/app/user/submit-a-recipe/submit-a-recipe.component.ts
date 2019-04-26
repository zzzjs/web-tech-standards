import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {RecipeService} from '../../recipes/recipe.service';
import {NetConnectService} from '../../shared/net.connect.service';
import {SubmitRecipe} from '../../recipes/models/submit.recipe.model';
import {UserService} from '../user.service';
import {Recipe} from '../../recipes/models/recipe.model';

@Component({
  selector: 'app-submit-a-recipe',
  templateUrl: '../submit-a-recipe/submit-a-recipe.component.html',
  styleUrls: ['../submit-a-recipe/submit-a-recipe.component.css']
})
export class SubmitARecipeComponent implements OnInit {
  recipeForm: FormGroup;
  editMode = false;
  private id: number;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private recipeServie: RecipeService,
              private netService: NetConnectService,
              private userService: UserService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
    // this.initForm();
  }

  onSubmit() {
    const ingredients = [];
    const directions = [];
    this.recipeForm.value.ingredients.forEach((ingredient) => {
      ingredients.push(ingredient.name);
    });
    this.recipeForm.value.directions.forEach((direction) => {
      directions.push(direction.name);
    });
    const author = this.editMode ?
      this.recipeServie.getRecipe(this.id + '').author :
      this.userService.getUser().username;
    const submitRecipe = new SubmitRecipe(
      this.recipeForm.value.name,
      this.recipeForm.value.imagePath,
      this.recipeForm.value.description,
      ingredients,
      directions,
      this.recipeForm.value.prep,
      this.recipeForm.value.cook,
      this.recipeForm.value.category,
      author
    );
    if (this.editMode) {
      const data = {
        id: this.id,
        recipe: submitRecipe,
        user: this.userService.getUser()
      };
      this.netService.updateRecipe(data);
    } else {
      this.netService.submitRecipe(submitRecipe);
    }
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
        'name': new FormControl(null, Validators.required)
      })
    );
  }

  getDirectionsControls() {
    return (<FormArray>this.recipeForm.get('directions')).controls;
  }

  onDeleteDirection(index: number) {
    (<FormArray>this.recipeForm.get('directions')).removeAt(index);
  }

  onAddDirection() {
    (<FormArray>this.recipeForm.get('directions')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required)
      })
    );
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);
    let recipeDirections = new FormArray([]);
    let preptime = '';
    let cooktime = '';
    let category = '';

    if (this.editMode) {
      const recipe = this.recipeServie.getRecipe(this.id + '');
      recipeName = recipe.title;
      recipeImagePath = recipe.photo.link;
      recipeDescription = recipe.description;
      preptime = recipe.preptime;
      cooktime = recipe.cooktime;
      category = recipe.category;
      if (recipe['ingredients']) {
        for (const ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient, Validators.required),
            })
          );
        }
      }
      if (recipe['directions']) {
        for (const direction of recipe.directions) {
          recipeDirections.push(
            new FormGroup({
              'name': new FormControl(direction, Validators.required),
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients,
      'directions': recipeDirections,
      'prep': new FormControl(preptime, Validators.required),
      'cook': new FormControl(cooktime, Validators.required),
      'category': new FormControl(category, Validators.required),
    });
  }
}

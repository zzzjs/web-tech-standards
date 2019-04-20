import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninComponent} from './auth/signin/signin.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeStartComponent} from './recipes/recipe-start/recipe-start.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import {HomeComponent} from './core/home/home.component';
import {AccountComponent} from './user/account/account.component';
import {AccountStartComponent} from './user/account/account-start/account-start.component';
import {AccountMyRecipesComponent} from './user/account/account-my-recipes/account-my-recipes.component';
import {AccountRecipesBoxComponent} from './user/account/account-recipes-box/account-recipes-box.component';
import {AccountMyProfileComponent} from './user/account/account-my-profile/account-my-profile.component';
import {SubmitARecipeComponent} from './user/submit-a-recipe/submit-a-recipe.component';

const routes: Routes = [
  // { path: 'recipes', component: RecipesComponent, children: [
  //     { path: '', component: RecipeStartComponent },
  //     { path: ':id', component: RecipeDetailComponent }
  //   ] },
  { path: '', component: HomeComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'recipes', component: RecipeListComponent},
  { path: 'recipes/:id', component: RecipeDetailComponent},
  { path: 'submit-a-recipe', component: SubmitARecipeComponent},
  { path: 'user', component: AccountComponent, children: [
      {path: '', component: AccountStartComponent},
      {path: 'my-recipes', component: AccountMyRecipesComponent},
      {path: 'recipes-box', component: AccountRecipesBoxComponent},
      {path: 'my-profile', component: AccountMyProfileComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

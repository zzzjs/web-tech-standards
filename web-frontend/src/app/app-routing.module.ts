import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninComponent} from './auth/signin/signin.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import {HomeComponent} from './core/home/home.component';
import {AccountComponent} from './user/account/account.component';
import {AccountStartComponent} from './user/account/account-start/account-start.component';
import {AccountMyRecipesComponent} from './user/account/account-my-recipes/account-my-recipes.component';
import {AccountRecipesBoxComponent} from './user/account/account-recipes-box/account-recipes-box.component';
import {AccountMyProfileComponent} from './user/account/account-my-profile/account-my-profile.component';
import {SubmitARecipeComponent} from './user/submit-a-recipe/submit-a-recipe.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SearchComponent} from './search/search.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {SearchResultComponent} from './search/search-result/search-result.component';
import {SearchResultStartComponent} from './search/search-result/search-result-start/search-result-start.component';
import {AccountAdminProfileComponent} from './admin/account/account-admin-profile/account-admin-profile.component';
import {AccountAllRecipesComponent} from './admin/account/account-all-recipes/account-all-recipes.component';
import {AccountAllUsersComponent} from './admin/account/account-all-users/account-all-users.component';
import {AdminComponent} from './admin/account/admin.component';
import {AccountEditComponent} from './user/account/account-edit/account-edit.component';
import {AccountAdminEditComponent} from './admin/account/account-admin-edit/account-admin-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'recipes', component: RecipeListComponent},
  { path: 'recipes/:id', component: RecipeDetailComponent},
  { path: 'submit-a-recipe', component: SubmitARecipeComponent},
  { path: 'search', component: SearchComponent, children: [
      {path: '', component: SearchResultStartComponent},
      {path: ':id', component: SearchResultComponent}
    ]},
  { path: 'about-us', component: AboutusComponent},
  { path: 'user', component: AccountComponent, children: [
      {path: '', component: AccountStartComponent},
      { path: ':id/edit', component: SubmitARecipeComponent},
      {path: 'my-recipes', component: AccountMyRecipesComponent},
      {path: 'recipes-box', component: AccountRecipesBoxComponent},
      {path: 'my-profile', component: AccountMyProfileComponent},
      {path: 'edit-account', component: AccountEditComponent},
    ]},
  { path: 'admin', component: AdminComponent, children: [
      { path: '', component: AccountAdminProfileComponent},
      { path: 'recipes', component: AccountAllRecipesComponent},
      { path: 'users', component: AccountAllUsersComponent},
      { path: ':id/edit', component: SubmitARecipeComponent},
      { path: 'edit-account', component: AccountAdminEditComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

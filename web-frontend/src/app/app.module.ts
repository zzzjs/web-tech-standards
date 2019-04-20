import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './core/header/header.component';
import {AuthService} from './auth/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './core/home/home.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import {RecipeService} from './recipes/recipe.service';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import {RecipesComponent} from './recipes/recipes.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { AccountComponent } from './user/account/account.component';
import { AccountStartComponent } from './user/account/account-start/account-start.component';
import { AccountMyRecipesComponent } from './user/account/account-my-recipes/account-my-recipes.component';
import { AccountRecipesBoxComponent } from './user/account/account-recipes-box/account-recipes-box.component';
import { AccountMyProfileComponent } from './user/account/account-my-profile/account-my-profile.component';
import { SubmitARecipeComponent } from './user/submit-a-recipe/submit-a-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    HomeComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeStartComponent,
    AccountComponent,
    AccountStartComponent,
    AccountMyRecipesComponent,
    AccountRecipesBoxComponent,
    AccountMyProfileComponent,
    SubmitARecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecepieItemComponent } from './recipes/recipe-list/recepie-item/recepie-item.component';


@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      RecipesComponent,
      RecipeListComponent,
      RecipeDetailComponent,
      RecepieItemComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }

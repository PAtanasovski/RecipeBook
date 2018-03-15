import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecepieItemComponent } from './recipe-list/recepie-item/recepie-item.component';
import { RecipesRoutingModule } from './recipes-routing.module';

@NgModule({
   declarations: [
      RecipesComponent,
      RecipeStartComponent,
      RecipeListComponent,
      RecipeEditComponent,
      RecipeDetailComponent,
      RecepieItemComponent
   ],
   imports: [
      CommonModule,
      ReactiveFormsModule,
      RecipesRoutingModule
   ]
})
export class RecipesModule {

}

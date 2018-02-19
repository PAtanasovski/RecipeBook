import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
   recipeSelected = new EventEmitter<Recipe>();

   private recipes: Recipe[] = [
      new Recipe('A Test Recipe', 'This is simply a test', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg'),
      new Recipe('Another Test Recipe', 'This is simply a test', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg')
   ];

   getRecipes() {
      return this.recipes.slice();
   }
}

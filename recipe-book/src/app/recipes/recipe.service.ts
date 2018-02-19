import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
   recipeSelected = new EventEmitter<Recipe>();

   private recipes: Recipe[] = [
      new Recipe('Tasty Schnitzel', 'A super-tasy Schnitzel - just awesome!', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg', [
         new Ingredient('Meat', 1),
         new Ingredient('French Fries', 20)
      ]),
      new Recipe('Big Fat Burger', 'What else you need to say?', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg', [
         new Ingredient('Buns', 2),
         new Ingredient('Meat', 1)
      ])
   ];

   getRecipes() {
      return this.recipes.slice();
   }
}

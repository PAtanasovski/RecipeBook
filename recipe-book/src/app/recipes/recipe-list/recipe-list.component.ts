import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
   selector: 'app-recipe-list',
   templateUrl: './recipe-list.component.html',
   styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   @Output() recipeWasSelected = new EventEmitter<Recipe>();
   recipes: Recipe[] = [
      new Recipe('A Test Recipe', 'This is simply a test', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg'),
      new Recipe('Another Test Recipe', 'This is simply a test', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg')
   ];

   constructor() { }

   ngOnInit() {
   }

   onRecipeSelected(recipe: Recipe) {
      this.recipeWasSelected.emit(recipe);
   }

}

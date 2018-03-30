import { Subject } from 'rxjs/Subject';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
   ingredientsChanged = new Subject<Ingredient[]>();
   staretedEditing = new Subject<number>();

   private ingredients: Ingredient[] = [
      new Ingredient('Apples', 5),
      new Ingredient('Tomatoes', 10)
   ];

   getIngredient(index: number) {
      return this.ingredients[index];
   }

   addIngredients(ingredients: Ingredient[]) {
      // for (const ingredient of ingredients) {
      //    this.addIngredient(ingredient);
      // }
      this.ingredients.push(...ingredients);
      this.ingredientsChanged.next(this.ingredients.slice());
   }

   updateIngredient(index: number, newIngredient: Ingredient) {
      this.ingredients[index] = newIngredient;
      this.ingredientsChanged.next(this.ingredients.slice());
   }

   deleteIngredient(index: number) {
      this.ingredients.splice(index, 1);
      this.ingredientsChanged.next(this.ingredients.slice());
   }
}

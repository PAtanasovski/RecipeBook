export class Ingredient {
   /**
    *  Typical way of definig variables and initializing them in the constructor
    */

   // public name: string;
   // public amount: number;

   // constructor(name: string, amount: number) {
   //    this.name = name;
   //    this.amount = amount;
   // }

   /**
    * Faster and shorter way of writing the same code as above
    */
   constructor(public name: string, public amount: number) { }
}

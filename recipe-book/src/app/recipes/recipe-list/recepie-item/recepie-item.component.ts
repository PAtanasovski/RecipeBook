import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
   selector: 'app-recepie-item',
   templateUrl: './recepie-item.component.html',
   styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {
   @Input() recipe: Recipe;
   @Input() index: number;

   ngOnInit() {
   }
}

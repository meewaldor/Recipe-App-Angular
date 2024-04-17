import { Component, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrl: './recipes-item.component.css'
})
export class RecipesItemComponent implements OnInit {
  @Input() index: number;
  @Input() recipe: Recipe;

  ngOnInit(): void {
      
  }
 

}

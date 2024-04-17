import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Router, QueryParamsHandling, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrl: './recipes-detail.component.css'
})
export class RecipesDetailComponent implements OnInit {
  recipe : Recipe;
  id: number;

  constructor(private shoppingListService: ShoppingListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
      this.route.params.subscribe(
        (params : Params) => {
          this.id = +params['id'];
          console.log(this.id);
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      )

  }
  addIngredients() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }
  
  
}

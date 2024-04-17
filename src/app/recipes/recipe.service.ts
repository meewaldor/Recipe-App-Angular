import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe',
        'This is simply a test', 
        "https://hips.hearstapps.com/hmg-prod/images/crepes-lead-64347419487e4.jpg?crop=0.9995238095238095xw:1xh;center,top&resize=768:*",
        [
            new Ingredient('Meat',1),
            new Ingredient('French Fries',20)
        ]),
        new Recipe('Another Test Recipe',
        'This is simply a test', 
        "https://hips.hearstapps.com/hmg-prod/images/crepes-lead-64347419487e4.jpg?crop=0.9995238095238095xw:1xh;center,top&resize=768:*",
        [
            new Ingredient('Meat',2),
            new Ingredient('Buns',10)
        ])
      ];

    getRecipes() {
        return this.recipes.slice(); //get a copy
    }
    getRecipe(index:number) {
        return this.recipes[index];
    }
}
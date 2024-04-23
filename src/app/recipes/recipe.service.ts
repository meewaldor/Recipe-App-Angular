import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class RecipeService {
    recipesChanged = new Subject<Recipe[]>;
    // private recipes: Recipe[] = [
    //     new Recipe('A Test Recipe',
    //     'This is simply a test', 
    //     "https://hips.hearstapps.com/hmg-prod/images/crepes-lead-64347419487e4.jpg?crop=0.9995238095238095xw:1xh;center,top&resize=768:*",
    //     [
    //         new Ingredient('Meat',1),
    //         new Ingredient('French Fries',20)
    //     ]),
    //     new Recipe('Another Test Recipe',
    //     'This is simply a test', 
    //     "https://img.freepik.com/premium-psd/italian-food-vegan-spagetti-italian-dish-pasta-food_396469-106.jpg",
    //     [
    //         new Ingredient('Meat',2),
    //         new Ingredient('Buns',10)
    //     ])
    //   ];

    private recipes: Recipe[] = [];

    getRecipes() {
        return this.recipes.slice(); //get a copy
    }
    getRecipe(index:number) {
        return this.recipes[index];
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index:number) {
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }
}
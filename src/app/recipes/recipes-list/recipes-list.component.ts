import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subcription: Subscription;

  constructor(private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ){}
  ngOnInit(): void {
      this.recipes = this.recipeService.getRecipes();
      this.subcription = this.recipeService.recipesChanged.subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      )
  }
  ngOnDestroy(): void {
      this.subcription.unsubscribe();
  }
  onNewRecipe() {
    this.router.navigate(['new'],{relativeTo: this.route});
  }
}

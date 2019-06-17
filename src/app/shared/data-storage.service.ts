import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipesService, private authService: AuthService) { }

    storeRecipes(){
        const token = this.authService.getToken();
       return this.http.put('https://ng-recipe-book-b8f11.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
    }

    getRecipes(){
       const token = this.authService.getToken();
       return this.http.get('https://ng-recipe-book-b8f11.firebaseio.com/recipes.json?auth=' + token)
            .subscribe(
                (response: Recipe[]) => {
                    const recipes: Recipe[] = response;
                    for (const recipe of recipes) {
                        if (!recipe['ingridients']) {
                            console.log(recipe);
                            recipe['ingridients'] = [];
                        }
                    }
                    this.recipeService.setRecipes(recipes);
                }
            );
    }
}
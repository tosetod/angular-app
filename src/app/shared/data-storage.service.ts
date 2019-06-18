import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipesService, private authService: AuthService) { }
    private url: string = 'https://ng-recipe-book-b8f11.firebaseio.com/recipes.json';

    storeRecipes(){
    //    return this.http.put('https://ng-recipe-book-b8f11.firebaseio.com/recipes.json', 
    //             this.recipeService.getRecipes(), {
    //                 observe: 'body',
    //                 params: new HttpParams().set('auth', token)        
    //             }
    //    );
        const req = new HttpRequest('PUT', this.url, this.recipeService.getRecipes(), 
            {reportProgress: true});
        return this.http.request(req);
    }

    getRecipes(){
       const token = this.authService.getToken();
       this.http.get<Recipe[]>('https://ng-recipe-book-b8f11.firebaseio.com/recipes.json?auth=' + token)
    //    this.http.get('https://ng-recipe-book-b8f11.firebaseio.com/recipes.json?auth=' + token, {
    //        observe: 'response',
    //        responseType: 'text'
    //    })
            .subscribe(
                (response) => {
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
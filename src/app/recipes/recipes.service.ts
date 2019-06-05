import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from './recipe.model';
import { Ingridient } from '../shared/ingridient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({ providedIn: 'root' })
export class RecipesService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 
        'This is simply a test', 
        'https://www.gimmesomeoven.com/wp-content/uploads/2014/03/Cajun-Jambalaya-Recipe-with-Andouille-Sausage-Shrimp-and-Chicken-32.jpg',
        [
            new Ingridient('Meat', 1),
            new Ingridient('French Fries', 20)
        ]),
        new Recipe('Another Test Recipe', 
        'This is simply a test', 
        'https://www.gimmesomeoven.com/wp-content/uploads/2014/03/Cajun-Jambalaya-Recipe-with-Andouille-Sausage-Shrimp-and-Chicken-32.jpg',
        [
            new Ingridient('Buns', 2),
            new Ingridient('Meat', 1)
        ])
    ];

    constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    addIngridientsToShoppingList(ingridients: Ingridient[]){
       this.slService.addIngridients(ingridients);
    }
}
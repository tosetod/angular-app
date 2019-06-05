import { Injectable, EventEmitter } from "@angular/core";
import { Ingridient } from '../shared/ingridient.model';

@Injectable({providedIn: 'root'})
export class ShoppingListService{
    ingridientsChanged = new EventEmitter<Ingridient[]>();

    private ingridients: Ingridient[] = [
        new Ingridient('Apples', 5),
        new Ingridient('Tomatoes', 10)
    ];
    
    getIngridients(){
        return this.ingridients.slice();
    }

    addIngridient(ingridient: Ingridient) {
        this.ingridients.push(ingridient);
        this.ingridientsChanged.emit(this.ingridients.slice());
    }

    addIngridients(ingridients: Ingridient[]){
        // for (const ingridient of ingridients) {
        //     this.addIngridient(ingridient);
        // }
        this.ingridients.push(...ingridients);
        this.ingridientsChanged.emit(this.ingridients.slice());
    }
}
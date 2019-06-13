import { Injectable, } from "@angular/core";
import { Ingridient } from '../shared/ingridient.model';
import { Subject } from 'rxjs/Subject';

@Injectable({providedIn: 'root'})
export class ShoppingListService{
    ingridientsChanged = new Subject<Ingridient[]>();
    startedEditing = new Subject<number>();

    private ingridients: Ingridient[] = [
        new Ingridient('Apples', 5),
        new Ingridient('Tomatoes', 10)
    ];
    
    getIngridients(){
        return this.ingridients.slice();
    }

    getIndridient(index: number){
        return this.ingridients[index];
    }

    addIngridient(ingridient: Ingridient) {
        this.ingridients.push(ingridient);
        this.ingridientsChanged.next(this.ingridients.slice());
    }

    addIngridients(ingridients: Ingridient[]){
        // for (const ingridient of ingridients) {
        //     this.addIngridient(ingridient);
        // }
        this.ingridients.push(...ingridients);
        this.ingridientsChanged.next(this.ingridients.slice());
    }

    updateIngridient(index: number, newIngridient: Ingridient){
        this.ingridients[index] = newIngridient;
        this.ingridientsChanged.next(this.ingridients.slice());
    }

    deleteIngridient(index: number){
        this.ingridients.splice(index, 1);
        this.ingridientsChanged.next(this.ingridients.slice());
    }
}
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Ingridient } from '../shared/ingridient.model';
import { ShoppingListService } from './shopping-list.service';


@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy{
    
    ingridients: Ingridient[];
    private subscription: Subscription;
    constructor(private sLService: ShoppingListService){ }

    ngOnInit(){
        this.ingridients = this.sLService.getIngridients();
        this.subscription = this.sLService.ingridientsChanged.subscribe(
            (ingridients: Ingridient[]) => {
                this.ingridients = ingridients;
            }
        );
    }

    onEditItem(index: number){
        this.sLService.startedEditing.next(index);
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

}
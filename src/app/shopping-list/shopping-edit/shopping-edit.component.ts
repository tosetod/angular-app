import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { Ingridient } from 'src/app/shared/ingridient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameInputRef = ElementRef.prototype.nativeElement;
  @ViewChild('amountInput', {static: false}) amountInputRef = ElementRef.prototype.nativeElement;


  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(){
    let ingName = this.nameInputRef.nativeElement.value;
    let ingAmount = this.amountInputRef.nativeElement.value;
    let ingridient = new Ingridient(ingName, ingAmount);
    this.slService.addIngridient(ingridient);
  }

}

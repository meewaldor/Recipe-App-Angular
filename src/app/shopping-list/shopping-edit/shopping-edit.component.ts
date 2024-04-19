import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  subcription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  addForm: FormGroup;

  
  constructor(private shoppingListService:ShoppingListService){}

  ngOnInit(): void {
      this.addForm = new FormGroup({
        'name': new FormControl(null,Validators.required),
        'amount': new FormControl(null,[Validators.required, Validators.pattern('^[1-9]+[0-9]*$')])
      });
      this.subcription = this.shoppingListService.startedEditing
      .subscribe(
        (index: number) => {
          this.editMode = true;
          this.editedItemIndex = index;
          this.editedItem = this.shoppingListService.getIngredient(index);
          this.addForm.setValue ({
            'name': this.editedItem.name,
            'amount': this.editedItem.amount 
          })
        }
      );
  }

  ngOnDestroy(): void {
      this.subcription.unsubscribe();
  }
  addIngredient(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount);
    this.shoppingListService.addIngredient(newIngredient);
  }

  onAddItem() {
    const ingName = this.addForm.get('name').value;
    const ingAmount = this.addForm.get('amount').value;
    const newIngredient = new Ingredient(ingName,ingAmount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.addForm.reset();

  }

  onClear() {
    this.addForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.onClear();
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
  }
}

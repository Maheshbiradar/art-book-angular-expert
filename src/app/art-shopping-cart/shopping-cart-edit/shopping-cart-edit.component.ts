import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ArtMeterial } from 'src/app/models/art-material-model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart-edit',
  templateUrl: './shopping-cart-edit.component.html',
  styleUrls: ['./shopping-cart-edit.component.css']
})
export class ShoppingCartEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') form: NgForm;
  index: number;
  editMode:boolean = false;
  editCartSub: Subscription;
  editedCartItem: ArtMeterial;

  constructor(private cartService: CartService) { }
  
  ngOnInit(): void {
   this.editCartSub = this.cartService.editCartItem.subscribe((item) => {
      this.editMode = true;
      this.index = item;
      this.editedCartItem = this.cartService.getArtMaterial(this.index);
      this.form.setValue({
        name: this.editedCartItem.name,
        amount: this.editedCartItem.amount
      })
    });
  }

  AddEditCartItem(form:NgForm) {
    const formVal = form.value;
    const nameVal: String = formVal.name;
    const amountVal: number = formVal.amount;
    const artMaterial = new ArtMeterial(nameVal, amountVal);
    if(this.editMode) {
      this.cartService.updateArtMaterial(this.index, artMaterial);
    } else {
      this.cartService.addArtMaterial(artMaterial);
    }
    this.editMode = false;
    form.reset();
    
  }

  ngOnDestroy(): void {
    this.editCartSub.unsubscribe();
  }

  onClear() {
    this.form.reset();
    this.editMode = false;
  }

  onDelete() {
    this.cartService.deleteCartItem(this.index);
    this.onClear();    
  }

}

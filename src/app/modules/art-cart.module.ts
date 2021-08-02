import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtShoppingCartComponent } from '../art-shopping-cart/art-shopping-cart.component';
import { ShoppingCartEditComponent } from '../art-shopping-cart/shopping-cart-edit/shopping-cart-edit.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArtCartRoutingModule } from './art-cart-routing.module';

@NgModule({
  declarations: [
    ArtShoppingCartComponent,
    ShoppingCartEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ArtCartRoutingModule
  ]
})
export class ArtCartModule { }

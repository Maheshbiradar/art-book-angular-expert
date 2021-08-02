import { NgModule } from '@angular/core';
import { ArtShoppingCartComponent } from '../art-shopping-cart/art-shopping-cart.component';
import { ShoppingCartEditComponent } from '../art-shopping-cart/shopping-cart-edit/shopping-cart-edit.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ArtCartRoutingModule } from './art-cart-routing.module';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    ArtShoppingCartComponent,
    ShoppingCartEditComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
    FormsModule,
    ArtCartRoutingModule
  ]
})
export class ArtCartModule { }

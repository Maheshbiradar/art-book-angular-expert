import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtShoppingCartComponent } from '../art-shopping-cart/art-shopping-cart.component';
import { RouterModule, Routes } from '@angular/router';

const cartRoutes: Routes = [   
  {path: '', component: ArtShoppingCartComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(cartRoutes)
  ],
  exports:[RouterModule]
})
export class ArtCartRoutingModule { }

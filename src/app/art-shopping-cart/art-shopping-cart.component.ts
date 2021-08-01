import { Component, Input, OnInit } from '@angular/core';
import { ArtMeterial } from '../models/art-material-model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-art-shopping-cart',
  templateUrl: './art-shopping-cart.component.html',
  styleUrls: ['./art-shopping-cart.component.css']
})
export class ArtShoppingCartComponent implements OnInit {
  artMaterials: ArtMeterial[];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.artMaterials = this.cartService.getArtMaterials();
    this.cartService.artMaterialsChanged.subscribe((artMaterials:ArtMeterial[]) => {
      this.artMaterials = artMaterials;
    })
  }

  onEditCartItem(index: number) {
    this.cartService.editCartItem.next(index);
  }

}

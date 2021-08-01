import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ArtMeterial } from '../models/art-material-model';
import { Art } from '../models/art.model';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class ArtService { 
  artsChanged = new Subject<Art[]>();

  arts: Art[] = [];

  getArts() {
    return this.arts.slice();
  }

  getArtFromId(index: number) {
    return this.arts[index];
  }

  constructor(private cartService: CartService) { }

  
  addArtMaterialsToCart(materials: ArtMeterial[]) {
    this.cartService.addArtMaterials(materials);
  }

  updateArt(index: number, art: Art) {
    this.arts[index] = art;
    this.artsChanged.next(this.arts.slice());
  }

  addArt(art: Art) {
    this.arts.push(art);
    this.artsChanged.next(this.arts.slice());
  }

  deleteArt(index: number) {
    this.arts.splice(index, 1);
    this.artsChanged.next(this.arts.slice());
  }

  setArts(arts: Art[]) {
    this.arts = arts;
    this.artsChanged.next(this.arts.slice());
  }
}

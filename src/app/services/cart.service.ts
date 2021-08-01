import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ArtMeterial } from '../models/art-material-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  editCartItem =  new Subject<number>();
  artMaterialsChanged =  new Subject<ArtMeterial[]>();
  artMaterials: ArtMeterial[] = [
    new ArtMeterial("Test1", 300),
    new ArtMeterial("Test2", 600)
  ];

  constructor() { }

  addArtMaterial(artMeterial: ArtMeterial) {
    this.artMaterials.push(artMeterial);
    this.artMaterialsChanged.next(this.artMaterials.slice());
  }

  getArtMaterials() {
    return this.artMaterials.slice();
  }

  getArtMaterial(index: number) {
    return this.artMaterials[index];
  }

  addArtMaterials(materials: ArtMeterial[]) {
    this.artMaterials.push(...materials);
    this.artMaterialsChanged.next(this.artMaterials.slice());
  }

  updateArtMaterial(index: number, newMaterial: ArtMeterial) {
    this.artMaterials[index] = newMaterial;
    this.artMaterialsChanged.next(this.artMaterials.slice());
  }

  deleteCartItem(index: number) {
    this.artMaterials.splice(index,1);
    this.artMaterialsChanged.next(this.artMaterials);
  }

}

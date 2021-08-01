import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  exhaustMap, map, take, tap } from 'rxjs/operators';
import { Art } from '../models/art.model';
import { ArtService } from './art.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private artService: ArtService, private authService: AuthService) { }

  storeData() {
    const arts: Art[] = this.artService.getArts();
    this.http.put("https://art-book-ng-default-rtdb.firebaseio.com/arts.json", arts).subscribe((res) => {
      console.log(res);
    })
  }

  fetchData() {    
     return this.http.get<Art[]>(
        "https://art-book-ng-default-rtdb.firebaseio.com/arts.json"
        ).pipe(
          map(arts => {
            return arts.map(art => {
              return {
                ...art,
                artMaterials: art.artMaterials ? art.artMaterials : []
              };
            });
          }),
          tap(arts => {
            this.artService.setArts(arts);
          })
      );   
  }
}

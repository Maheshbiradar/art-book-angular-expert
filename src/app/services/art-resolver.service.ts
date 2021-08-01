import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Art } from '../models/art.model';
import { ArtService } from './art.service';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ArtResolverService implements Resolve<Art[]> {

  constructor(private dataStorageService: DataStorageService, private artService: ArtService) { }
  resolve(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): any[] 
    | Observable<any[]> 
    | Promise<any[]> {
      const arts: Art[] = this.artService.getArts();
      if(arts.length === 0) {
       return this.dataStorageService.fetchData();
      } else {
       return arts;
      }
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArtService } from 'src/app/services/art.service';
import { Art } from '../../models/art.model';

@Component({
  selector: 'app-art-list',
  templateUrl: './art-list.component.html',
  styleUrls: ['./art-list.component.css']
})
export class ArtListComponent implements OnInit, OnDestroy {
  arts: Art[];
  artSub: Subscription;

  constructor(private artService: ArtService, private router: Router,
     private activatedRoute: ActivatedRoute) {   
   }
  ngOnDestroy(): void {
    this.artSub.unsubscribe();
  }

  ngOnInit(): void {
    this.arts = this.artService.getArts();
    this.artSub = this.artService.artsChanged.subscribe((arts) => {
      this.arts = arts;
    })
  }

  onNewArt() {
    this.router.navigate(['new'], { relativeTo: this.activatedRoute });
  }

}

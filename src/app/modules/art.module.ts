import { NgModule } from '@angular/core';
import { ArtGalleryComponent } from '../art-gallery/art-gallery.component';
import { ArtListComponent } from '../art-gallery/art-list/art-list.component';
import { ArtDetailComponent } from '../art-gallery/art-detail/art-detail.component';
import { ArtItemComponent } from '../art-gallery/art-list/art-item/art-item.component';
import { ArtStarterComponent } from '../art-gallery/art-starter/art-starter.component';
import { EditArtComponent } from '../art-gallery/edit-art/edit-art.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArtRoutingModule } from './art-routing.module';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    ArtGalleryComponent,
    ArtListComponent,
    ArtDetailComponent,
    ArtItemComponent,
    ArtStarterComponent,
    EditArtComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,    
    ArtRoutingModule,
    SharedModule
  ]
})
export class ArtModule { }

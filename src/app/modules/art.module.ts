import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtGalleryComponent } from '../art-gallery/art-gallery.component';
import { ArtListComponent } from '../art-gallery/art-list/art-list.component';
import { ArtDetailComponent } from '../art-gallery/art-detail/art-detail.component';
import { ArtItemComponent } from '../art-gallery/art-list/art-item/art-item.component';
import { ArtStarterComponent } from '../art-gallery/art-starter/art-starter.component';
import { EditArtComponent } from '../art-gallery/edit-art/edit-art.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routes/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ArtRoutingModule } from './art-routing.module';

@NgModule({
  declarations: [
    ArtGalleryComponent,
    ArtListComponent,
    ArtDetailComponent,
    ArtItemComponent,
    ArtStarterComponent,
    EditArtComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,    
    ArtRoutingModule
  ],
  exports: [    
  ]
})
export class ArtModule { }

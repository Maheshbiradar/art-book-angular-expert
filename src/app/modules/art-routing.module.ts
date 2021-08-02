import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArtGalleryComponent } from '../art-gallery/art-gallery.component';
import { AuthGuard } from '../guards/auth.guard';
import { ArtStarterComponent } from '../art-gallery/art-starter/art-starter.component';
import { EditArtComponent } from '../art-gallery/edit-art/edit-art.component';
import { ArtDetailComponent } from '../art-gallery/art-detail/art-detail.component';
import { ArtResolverService } from '../services/art-resolver.service';

const artRoutes: Routes = [
  {path: 'arts', component: ArtGalleryComponent, 
  canActivate: [AuthGuard],
  children: [
      { path:'', component: ArtStarterComponent },
      { path:'new', component: EditArtComponent },
      { path:':id', component: ArtDetailComponent, resolve: [ArtResolverService] },
      { path: ':id/edit', component: EditArtComponent, resolve: [ArtResolverService] }
  ]}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(artRoutes)
  ],
  exports: [RouterModule]
})
export class ArtRoutingModule { }

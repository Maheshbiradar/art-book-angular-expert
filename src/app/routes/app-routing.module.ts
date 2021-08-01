import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArtDetailComponent } from "../art-gallery/art-detail/art-detail.component";
import { ArtGalleryComponent } from "../art-gallery/art-gallery.component";
import { ArtStarterComponent } from "../art-gallery/art-starter/art-starter.component";
import { EditArtComponent } from "../art-gallery/edit-art/edit-art.component";
import { ArtShoppingCartComponent } from "../art-shopping-cart/art-shopping-cart.component";
import { AuthComponent } from "../auth/auth.component";
import { AuthGuard } from "../guards/auth.guard";
import { ArtResolverService } from "../services/art-resolver.service";

const appRoutes: Routes = [
    {path: '', redirectTo:'/arts', pathMatch: 'full'},
    {path: 'arts', component: ArtGalleryComponent, 
    canActivate: [AuthGuard],
    children: [
        { path:'', component: ArtStarterComponent },
        { path:'new', component: EditArtComponent },
        { path:':id', component: ArtDetailComponent, resolve: [ArtResolverService] },
        { path: ':id/edit', component: EditArtComponent, resolve: [ArtResolverService] }
    ]},
    {path: 'cart', component: ArtShoppingCartComponent },
    {path: 'auth', component: AuthComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
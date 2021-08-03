import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ArtShoppingCartComponent } from "../art-shopping-cart/art-shopping-cart.component";
import { AuthComponent } from "../auth/auth.component";

const appRoutes: Routes = [
    {path: '', redirectTo:'/arts', pathMatch: 'full'},    
    {path: 'cart', component: ArtShoppingCartComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
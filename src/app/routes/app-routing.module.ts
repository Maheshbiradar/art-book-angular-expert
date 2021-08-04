import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";


const appRoutes: Routes = [
    {
        path: '',
        redirectTo:'/arts', pathMatch: 'full'
    },
    {
        path: "arts",
        loadChildren: () =>
          import("../modules/art.module").then(m => m.ArtModule)
    },
    {
        path: "cart",
        loadChildren: () =>
          import("../modules/art-cart.module").then(m => m.ArtCartModule)
    },
    {
        path: "auth",
        loadChildren: () =>
          import("../modules/auth.module").then(m => m.AuthModule)
    }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
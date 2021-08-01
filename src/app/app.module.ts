import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArtGalleryComponent } from './art-gallery/art-gallery.component';
import { ArtListComponent } from './art-gallery/art-list/art-list.component';
import { ArtDetailComponent } from './art-gallery/art-detail/art-detail.component';
import { ArtItemComponent } from './art-gallery/art-list/art-item/art-item.component';
import { ArtShoppingCartComponent } from './art-shopping-cart/art-shopping-cart.component';
import { ShoppingCartEditComponent } from './art-shopping-cart/shopping-cart-edit/shopping-cart-edit.component';
import { appDropdownDirective } from './directives/dropdown-directive';
import { CartService } from './services/cart.service';
import { AppRoutingModule } from './routes/app-routing.module';
import { ArtStarterComponent } from './art-gallery/art-starter/art-starter.component';
import { EditArtComponent } from './art-gallery/edit-art/edit-art.component';
import { ArtService } from './services/art.service';
import { AuthComponent } from './auth/auth.component';
import { LoaderComponent } from './shared/loader.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArtGalleryComponent,
    ArtListComponent,
    ArtDetailComponent,
    ArtItemComponent,
    ArtShoppingCartComponent,
    ShoppingCartEditComponent,
    appDropdownDirective,
    ArtStarterComponent,
    EditArtComponent,
    AuthComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CartService, ArtService, 
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptorService, 
      multi: true 
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

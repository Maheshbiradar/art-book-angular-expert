import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CartService } from './services/cart.service';
import { AppRoutingModule } from './routes/app-routing.module';
import { ArtService } from './services/art.service';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { ArtModule } from './modules/art.module';
import { ArtCartModule } from './modules/art-cart.module';
import { SharedModule } from './modules/shared.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,    
    AuthComponent     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ArtModule,
    ArtCartModule,
    SharedModule
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

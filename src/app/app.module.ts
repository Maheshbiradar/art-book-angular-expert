import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { ArtModule } from './modules/art.module';
import { ArtCartModule } from './modules/art-cart.module';
import { SharedModule } from './modules/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from './modules/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ArtModule,
    ArtCartModule,
    SharedModule,
    AuthModule
  ],
  providers: [ 
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptorService, 
      multi: true 
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

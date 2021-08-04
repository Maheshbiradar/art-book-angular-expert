import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from '../auth/auth.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [ AuthComponent ],
  imports: [    
    FormsModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: AuthComponent }])
  ],
  exports: [
    CommonModule, 
    FormsModule, 
    AuthComponent, 
    RouterModule
  ]
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../shared/loader.component';
import { appDropdownDirective } from '../directives/dropdown-directive';

@NgModule({
  declarations: [            
    appDropdownDirective,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    appDropdownDirective,
    LoaderComponent,
    CommonModule
  ]
})
export class SharedModule { }

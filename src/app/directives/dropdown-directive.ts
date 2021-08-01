import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class appDropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggle () {
    this.isOpen = !this.isOpen;
  } 
  constructor() { }

}

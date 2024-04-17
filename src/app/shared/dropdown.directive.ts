import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor(private eleRef: ElementRef){};
  @HostBinding('class.open') isOpen = false;
  
  @HostListener('document:click', ['$event']) openToggle(event: Event) {
    this.isOpen = this.eleRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

}

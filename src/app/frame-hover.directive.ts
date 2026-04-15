import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appFrameHover]',
  standalone: false
})
export class FrameHoverDirective {
  @HostBinding('style.border') border: string = 'none';
  @HostBinding('class.hovered') isHovered: boolean = false;
  @HostListener('mouseenter', ['$event']) onMouseEnter(event: MouseEvent) {
    this.border = '2px solid black';
    this.isHovered = true;
  }
  @HostListener('mouseleave', ['$event']) onMouseLeave(event: MouseEvent) {
    this.border = 'none';
    this.isHovered = false;
  }

  constructor() { }

}

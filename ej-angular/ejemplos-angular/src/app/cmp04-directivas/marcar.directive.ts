import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcar]'
})
export class MarcarDirective implements OnInit {

  @HostBinding('style.background-color') colorFondo: string = ''
  @Input('appMarcar') color: string = ''

  constructor() {}

  ngOnInit(): void {
    // console.log(this.color)
    if (!this.color) {
      this.color = 'yellow'
    }
  }

  @HostListener('mouseover') onMouseOver() {
    this.colorFondo = this.color
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.colorFondo = 'white'
  }
}

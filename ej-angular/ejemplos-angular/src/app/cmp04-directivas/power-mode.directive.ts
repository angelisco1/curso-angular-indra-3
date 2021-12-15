import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appPowerMode]'
})
export class PowerModeDirective {
  @HostBinding('style.position') position: string = 'relative'
  @HostBinding('style.top') top: string = '0px'
  @HostBinding('style.left') left: string = '0px'
  @HostBinding('style.color') color: string = 'black'

  colores: Array<string> = ['black', 'white', 'gray', 'yellow', 'red', 'blue', 'orange']

  constructor() { }

  @HostListener('input') onInput() {
    this.top = '5px'
    this.left = '5px'
    const pos = Math.floor(Math.random() * this.colores.length)
    this.color = this.colores[pos]
    setTimeout(() => {
      this.top = '0px'
      this.left = '0px'
    }, 300)
  }
}

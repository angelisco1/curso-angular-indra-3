import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarPalabras'
})
export class OcultarPalabrasPipe implements PipeTransform {

  transform(value: string, palabras: Array<string>): string {
    palabras.forEach((palabra) => {
      // -- Solución 1
      const regExp = new RegExp(palabra, 'gi')
      value = value.replace(regExp, '*'.repeat(palabra.length))
      // -- Solución 2
      // value = value.replaceAll(palabra, '*'.repeat(palabra.length))
    })
    return value
  }

}


// {{ 'No se si me va a tocar la loteria' | ocultarPalabras:['no', 'si', 'loteria']}} -> '** se ** me va a tocar la *******'

// 'Penny...'.repeat(3)
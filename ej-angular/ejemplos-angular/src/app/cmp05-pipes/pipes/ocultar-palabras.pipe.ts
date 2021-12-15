import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarPalabras'
})
export class OcultarPalabrasPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return 'aaa, aa, aaagua, aaa'.replaceAll('aaa', '***')
    // return null;
  }

}


// {{ 'no se si me va a tocar la loteria' | ocultarPalabras:['no', 'si', 'loteria']}} -> '** se ** me va a tocar la *******'

// 'Penny...'.repeat(3)
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    // const arrLetras = value.split('')
    // const arrAlReves = arrLetras.reverse()
    // const resultado = arrAlReves.join('')
    // return resultado;
    return value.split('').reverse().join('')
  }

}


// {{ 'hola mundo' | reverse}} -> 'odnum aloh'
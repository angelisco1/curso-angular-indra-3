import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doble'
})
export class DoblePipe implements PipeTransform {

  transform(value: number, desc?: number): number {
    let resultado = value * 2
    if (desc) {
      resultado -= desc
    }
    return resultado;
  }

}

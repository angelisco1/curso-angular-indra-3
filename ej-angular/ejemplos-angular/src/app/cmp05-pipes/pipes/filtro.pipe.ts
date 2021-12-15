import { Pipe, PipeTransform } from '@angular/core';
import { map, repeat } from 'rxjs';

@Pipe({
  name: 'filtro',
  // pure: false
})
export class FiltroPipe implements PipeTransform {

  transform(value: Array<string>, filtro: string): Array<string> {
    console.log('Pasa por el pipe')
    return value.filter(item => item.includes(filtro))
  }

}
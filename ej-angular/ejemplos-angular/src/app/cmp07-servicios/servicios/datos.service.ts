import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private datos: Array<string> = [
    'Item 1'
  ]

  constructor() { }

  getDatos(): Array<string> {
    return this.datos
  }

  addDato(texto: string): void {
    this.datos.push(texto)
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarjetasService {

  constructor() { }

  getNumTarjeta(): string {
    return '0000 1234 9876 6824'
  }
}

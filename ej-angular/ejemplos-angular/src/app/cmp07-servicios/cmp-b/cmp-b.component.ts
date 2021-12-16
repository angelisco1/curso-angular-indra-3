import { Component, Inject, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';
import { EventosService } from '../servicios/eventos.service';

@Component({
  selector: 'app-cmp-b',
  templateUrl: './cmp-b.component.html',
  styleUrls: ['./cmp-b.component.css'],
  // providers: [
  //   DatosService
  // ]
})
export class CmpBComponent implements OnInit {
  datos: Array<string> = []
  isLoggedIn: boolean = false

  constructor(
    private datosService: DatosService,
    private eventos: EventosService) {
      this.eventos.authEvent$
        .subscribe((isLoggedIn: boolean) => {
          console.log('aaaa')
          this.isLoggedIn = isLoggedIn
        })
    }

  ngOnInit(): void {
    this.datos = this.datosService.getDatos()
  }

  guardar(texto: string): void {
    this.datosService.addDato(texto)
  }
}

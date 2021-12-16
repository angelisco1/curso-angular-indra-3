import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-cmp-a',
  templateUrl: './cmp-a.component.html',
  styleUrls: ['./cmp-a.component.css']
})
export class CmpAComponent implements OnInit {
  datos: Array<string> = []

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.datos = this.datosService.getDatos()
  }

  guardar(texto: string): void {
    this.datosService.addDato(texto)
  }

}

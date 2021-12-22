import { Component, OnInit } from '@angular/core';
import { TarjetasService } from '../tarjetas.service';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {
  numTarjeta: string = ''
  constructor(private tarjetas: TarjetasService) { }

  ngOnInit(): void {
    this.numTarjeta = this.tarjetas.getNumTarjeta()
  }
}

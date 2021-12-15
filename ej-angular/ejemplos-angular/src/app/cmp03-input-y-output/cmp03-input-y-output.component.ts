import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp03-input-y-output',
  templateUrl: './cmp03-input-y-output.component.html',
  styleUrls: ['./cmp03-input-y-output.component.css']
})
export class Cmp03InputYOutputComponent implements OnInit {

  nombreLeia: string = 'Leia Organa'
  nombreLuke: string = 'Luke Skywalker'

  constructor() { }

  ngOnInit(): void {
  }

  muestraEvento(msg: string): void {
    console.log(msg)
  }

  cambiarNombre(nuevoNombre: string): void {
    this.nombreLeia = nuevoNombre
  }
}

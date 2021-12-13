import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp02-variables-de-plantilla',
  templateUrl: './cmp02-variables-de-plantilla.component.html',
  styleUrls: ['./cmp02-variables-de-plantilla.component.css']
})
export class Cmp02VariablesDePlantillaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saludar(nombre: string): void {
    alert('Hola ' + nombre)
  }

  saludar2(input: HTMLInputElement): void {
    alert(`Hola ${input.value}`) // Template syntax
    input.value = ''
  }
}

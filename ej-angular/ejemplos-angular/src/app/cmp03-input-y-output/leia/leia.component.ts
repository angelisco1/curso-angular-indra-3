import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-leia',
  templateUrl: './leia.component.html',
  styleUrls: ['./leia.component.css']
})
export class LeiaComponent implements OnInit {
  @Input() nombre: string = ''
  @Output() nombreCambiado = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  cambiarNombre(event: any) {
    // this.nombre = event.target.value
    this.nombreCambiado.emit(event.target.value)
  }
}

import { Component, OnInit } from '@angular/core';
import { IIdNuevaTarea } from './interfaces';
import { Tarea } from './models/tarea';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-cmp09-http',
  templateUrl: './cmp09-http.component.html',
  styleUrls: ['./cmp09-http.component.css']
})
export class Cmp09HttpComponent implements OnInit {
  listaTareas: Array<Tarea> = []

  constructor(private tareasServ: TareasService) { }

  ngOnInit(): void {
    this.getTareas()
  }

  getTareas() {
    this.tareasServ.getTareas()
      .subscribe((tareas: Array<Tarea>) => {
        console.log(tareas)
        this.listaTareas = tareas
      })
  }

  guardar() {
    // const tarea = {
    //   titulo: 'Ver One Piece este finde',
    //   completada: false
    // }
    const tarea = new Tarea('Ver One Piece este finde', false)
    this.tareasServ.createTareas(tarea)
      .subscribe((datos: IIdNuevaTarea) => {
        console.log(datos)
        // tarea.id = datos.name
        // this.listaTareas.push(tarea)
        this.getTareas()
      })
  }

}

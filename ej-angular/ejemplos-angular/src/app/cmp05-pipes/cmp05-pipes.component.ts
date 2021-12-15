import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp05-pipes',
  templateUrl: './cmp05-pipes.component.html',
  styleUrls: ['./cmp05-pipes.component.css']
})
export class Cmp05PipesComponent implements OnInit {

  producto: any = {
    titulo: 'one plus 9',
    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione nostrum at veniam ab labore eaque quo repellendus optio vero, iusto vel doloribus id quis? Amet corrupti molestias neque asperiores repellendus.',
    precio: 800,
    fechaLanzamiento: new Date(2021, 2, 13),
  }

  tareas: Array<string> = [
    'Tarea 1',
    'Tarea 2',
    'Tarea 3'
  ]

  filtroTxt: string = ''


  constructor() { }

  ngOnInit(): void {
    // const pipe = new TitleCasePipe()
    // console.log(pipe.transform(this.producto.titulo))
  }

  addTarea(event: any): void {
    // this.tareas.push(event.target.value)
    this.tareas = [...this.tareas, event.target.value]
  }

}

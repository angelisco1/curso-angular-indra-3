import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  formEditar: FormGroup;

  constructor(private tareasServ: TareasService) {
    this.formEditar = new FormGroup({
      id: new FormControl('', Validators.required),
      titulo: new FormControl('', Validators.required),
      completada: new FormControl(false),
    })
  }

  ngOnInit(): void {
    this.getTareas()
  }

  actualizar() {
    console.log(this.formEditar)
    const idTareaEditada = this.formEditar.value.id

    this.tareasServ.updateTarea(this.formEditar.value)
      .subscribe((datosActualizados: Tarea) => {
        console.log('Actualizado')

        // SOLUCION 1
        let tarea = this.listaTareas.find(t => t.id === idTareaEditada)
        Object.assign(tarea, datosActualizados)

        // SOLUCION 2
        const pos = this.listaTareas.findIndex((t: Tarea) => t.id === idTareaEditada)
        const tareaActualizada = new Tarea(datosActualizados.titulo, datosActualizados.completada, idTareaEditada)
        this.listaTareas.splice(pos, 1, tareaActualizada)
      })
  }

  rellenarFormulario(t: Tarea) {
    // this.formEditar.controls['id'].setValue(t.id)
    // this.formEditar.controls['titulo'].setValue(t.titulo)
    // this.formEditar.controls['completada'].setValue(t.completada)
    // this.formEditar.setValue({
    //   id: t.id,
    //   titulo: t.titulo,
    //   completada: t.completada
    // })
    this.formEditar.setValue({...t})
  }

  getTareas() {
    this.tareasServ.getTareas()
      .subscribe((tareas: Array<Tarea>) => {
        console.log(tareas)
        this.listaTareas = tareas
      })
  }

  guardar(): void {
    // const tarea = {
    //   titulo: 'Ver One Piece este finde',
    //   completada: false
    // }
    const tarea = new Tarea('Ver One Piece este finde', false)
    this.tareasServ.createTarea(tarea)
      .subscribe((datos: IIdNuevaTarea) => {
        console.log(datos)
        // tarea.id = datos.name
        // this.listaTareas.push(tarea)
        this.getTareas()
      })
  }

  completar(tarea: Tarea): void {
    this.tareasServ.completeTarea(tarea)
      .subscribe((datos: any) => {
        tarea.completada = datos.completada
      })
  }

  eliminar(id: string): void {
    this.tareasServ.deleteTarea(id)
      .subscribe(() => {
        // SOLUCION 1
        // this.listaTareas = this.listaTareas.filter((t: Tarea) => {
        //   return t.id !== id
        // })

        // SOLUCION 2
        const pos = this.listaTareas.findIndex((t: Tarea) => t.id === id)
        this.listaTareas.splice(pos, 1)
      })
  }

}

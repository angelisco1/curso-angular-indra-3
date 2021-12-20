import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IIdNuevaTarea, IObjetosTarea } from '../interfaces';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private url: string = environment.urlFirebaseTareas

  constructor(private http: HttpClient) { }

  getTareas(): Observable<Array<Tarea>> {
    return this.http.get<IObjetosTarea>(`${this.url}.json`)
      .pipe(
        map((tareas: IObjetosTarea) => {
          const arrTareas: Array<Tarea> = []

          for (let id in tareas) {
            const { titulo, completada } = tareas[id]
            const tarea = new Tarea(titulo, completada, id)
            arrTareas.push(tarea)
          }

          return arrTareas
        })
      )
  }

  createTarea(tarea: Tarea): Observable<IIdNuevaTarea> {
    return this.http.post<IIdNuevaTarea>(`${this.url}.json`, tarea)
  }

  completeTarea(tarea: Tarea): Observable<any> {
    const datosACambiar = {completada: !tarea.completada}
    const idTarea = tarea.id
    return this.http.patch(`${this.url}/${idTarea}.json`, datosACambiar)
  }

  deleteTarea(idTarea: string): Observable<null> {
    return this.http.delete<null>(`${this.url}/${idTarea}.json`)
  }

  updateTarea(tarea: Tarea): Observable<Tarea> {
    const idTarea = tarea.id
    // SOLUCION 1
    // const datosACambiar = {
    //   titulo: tarea.titulo,
    //   completada: tarea.completada
    // }

    // SOLUCION 2
    const datosACambiar = {...tarea}
    delete datosACambiar.id
    return this.http.put<Tarea>(`${this.url}/${idTarea}.json`, datosACambiar)
  }
}

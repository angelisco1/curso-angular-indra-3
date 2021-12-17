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

  createTareas(tarea: Tarea): Observable<IIdNuevaTarea> {
    return this.http.post<IIdNuevaTarea>(`${this.url}.json`, tarea)
  }
}

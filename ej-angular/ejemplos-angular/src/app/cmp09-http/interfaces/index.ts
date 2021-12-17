import { Tarea } from "../models/tarea";

export interface IIdNuevaTarea {
  name: string
}

export interface IObjetosTarea {
  [key: string]: Tarea
}
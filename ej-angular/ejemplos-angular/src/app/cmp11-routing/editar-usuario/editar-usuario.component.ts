import { Component, OnInit } from '@angular/core';
import { UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ComponentCanDeactivate } from '../guards/is-data-saved.guard';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit, ComponentCanDeactivate
 {
  datosGuardados: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  guardar() {
    this.datosGuardados = true
  }

  canDeactivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.datosGuardados ? true : confirm('Seguro que quieres salir de esta página?? Perderas los cambios que no hayas guardado...')
  }

}

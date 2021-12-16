import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit, OnChanges {

  @Input() errores: ValidationErrors | null = {}
  mensajesErrores: Array<string> = []

  constructor() { }

  ngOnChanges(): void {
    // console.log('Han cambiado los errores')
    console.log(this.errores)

    this.mensajesErrores = []

    for (let key in this.errores) {
      // console.log({key})

      if (key === 'required') {
        this.mensajesErrores.push('El campo es obligatorio')

      } else if (key === 'minlength') {
        const error = this.errores[key]
        const msg = `Te faltan ${error.requiredLength - error.actualLength}/${error.requiredLength} caracteres`
        this.mensajesErrores.push(msg)

      } else if (key === 'pattern') {
        const error = this.errores[key]
        const msg = `El ${error.actualValue} no cumple con el siguiente patrón: ${error.requiredPattern}`
        this.mensajesErrores.push(msg)

      } else if (key === 'esStark') {
        const error = this.errores[key]
        const msg = `${error.nombreActual} no es un Stark (${error.nombresValidos.join(', ')})`
        this.mensajesErrores.push(msg)

      } else if (key === 'esPwSegura') {
        const error = this.errores[key]
        if (!error.simbolos) {
          this.mensajesErrores.push('La contraseña tiene que tener algún signo de puntuación')
        }
        if (!error.mayus) {
          this.mensajesErrores.push('La contraseña tiene que tener alguna letra mayúscula')
        }

      } else if (key === 'confirmarPassword') {

        this.mensajesErrores.push('Las contraseñas tienen que ser iguales')
      }
    }
  }

  ngOnInit(): void {

  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ValidationErrors, AbstractControl, ControlContainer } from '@angular/forms'
import { CustomValidators } from '../custom-validators';
// import ValidatorsFns from '../custom-validators';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})
export class ReactivoComponent implements OnInit {
  formulario: FormGroup

  get erroresUsername(): ValidationErrors | null {
    return this.formulario.controls['username'].errors
  }

  get inputUsernameProps(): boolean {
    return this.formulario.controls['username'].invalid && this.formulario.controls['username'].dirty
  }

  // get inputConfirmarPasswordProps(): boolean {
  //   return this.formulario.controls['confirmarPassword'].dirty && this.formulario?.errors?.['confirmarPassword'];
  // }

  get inputUsername(): AbstractControl {
    return this.formulario.controls['username']
  }

  get erroresEmail(): ValidationErrors | null {
    return this.formulario.controls['email'].errors
  }

  get erroresPassword(): ValidationErrors | null {
    return this.formulario.controls['password'].errors
  }

  get erroresConfirmarPassword(): ValidationErrors | null {
    // return this.formulario.errors
    return this.formulario.controls['confirmarPassword'].errors
  }

  constructor(private formBuilder: FormBuilder) {
    this.formulario = formBuilder.group({

      username: formBuilder.control('', [Validators.required, CustomValidators.esUnStark]),

      email: formBuilder.control('aaa@aaa.com', [Validators.required, Validators.pattern(/[a-z]+@[a-z]+\.(com|es|net)/)]),

      password: formBuilder.control('', [Validators.required, Validators.minLength(8), CustomValidators.esPasswordSegura({mayus: true, simbolos: true})]),

      confirmarPassword: formBuilder.control('', [CustomValidators.passwordRepetidaValida])
    }, {
      // updateOn: 'blur',
      // validators: [CustomValidators.passwordRepetidaValida]
    })
  }

  ngOnInit(): void {

  }

  registro() {
    console.log(this.formulario)
    console.log(this.formulario.value)
  }

  getPintaErrores(campo: string): boolean {
    return this.formulario.controls[campo].invalid && this.formulario.controls[campo].dirty
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from './cmp07-servicios/servicios/auth.service';
import { EventosService } from './cmp07-servicios/servicios/eventos.service';
import { AutenticacionService } from './cmp10-autenticacion/autenticacion.service';
import jwtDecode from 'jwt-decode'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean = false
  formLogin: FormGroup
  disabledLoginBtn: boolean = false

  constructor(
    private auth: AuthService,
    private eventos: EventosService,
    private autenticacion: AutenticacionService) {

      this.formLogin = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
      })

    }

  ngOnInit(): void {
    // this.isLoggedIn = this.auth.hasToken()
    this.eventos.authEvent$
      .subscribe((isLoggedIn: boolean) => {
        console.log('Event Emitter', isLoggedIn)
        this.isLoggedIn = isLoggedIn
      })

    this.eventos.authEvent$.emit(this.auth.hasToken())
  }

  // ngAfterViewInit() {
  //   this.eventos.authEvent$.emit(this.auth.hasToken())
  // }

  resetForm(): void {
    this.formLogin.reset()
    this.disabledLoginBtn = false
  }

  login(): void {
    this.disabledLoginBtn = true
    const datosLogin = this.formLogin.value
    this.autenticacion.login(datosLogin)
      .subscribe({
        next: (datos: any) => {
          const token = datos.token

          // const payload = jwtDecode(token)
          // console.log({payload})

          // const token = Math.random().toString().slice(2)
          this.auth.setToken(token)
          // this.disabledLoginBtn = false
          this.resetForm()
        },
        error: (err: any) => {
          alert(err.error.msg)
          this.disabledLoginBtn = false
          // this.resetForm()
        }
      })
  }

  logout(): void {
    this.auth.delToken()
  }

}

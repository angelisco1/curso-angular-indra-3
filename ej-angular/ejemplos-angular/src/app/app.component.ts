import { Component, OnInit } from '@angular/core';
import { AuthService } from './cmp07-servicios/servicios/auth.service';
import { EventosService } from './cmp07-servicios/servicios/eventos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean = false

  constructor(
    private auth: AuthService,
    private eventos: EventosService) {}

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

  login(): void {
    const token = Math.random().toString().slice(2)
    this.auth.setToken(token)
  }

  logout(): void {
    this.auth.delToken()
  }

}

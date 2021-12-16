import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-cmp08-observables',
  templateUrl: './cmp08-observables.component.html',
  styleUrls: ['./cmp08-observables.component.css']
})
export class Cmp08ObservablesComponent implements OnInit {
  mostrarHora: boolean = false
  constructor() { }

  ngOnInit(): void {
    const miObservable = new Observable((subscriber: Subscriber<string>) => {
      subscriber.next('Mensaje 1')
      setTimeout(() => {
        subscriber.next('Mensaje 2')
      }, 3000)
      setTimeout(() => {
        subscriber.error('Un error')
        // subscriber.complete()
      }, 6000)
      setTimeout(() => {
        subscriber.next('Otro mensajes más')
      }, 7000)
    })

    miObservable.subscribe({
      next: (msg: string) => {
        console.log(msg)
      },
      error: (err) => {
        console.log('Hay un error', err)
      },
      complete: () => {
        console.log('Ya no vamos a enviar más mensajes')
      }
    })
  }

  toggleMostrarHora() {
    this.mostrarHora = !this.mostrarHora
  }

}

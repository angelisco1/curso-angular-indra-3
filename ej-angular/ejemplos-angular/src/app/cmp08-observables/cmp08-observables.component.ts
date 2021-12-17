import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, Observable, of, Subscriber } from 'rxjs';
import { filter, map, take } from 'rxjs/operators'

@Component({
  selector: 'app-cmp08-observables',
  templateUrl: './cmp08-observables.component.html',
  styleUrls: ['./cmp08-observables.component.css']
})
export class Cmp08ObservablesComponent implements OnInit {
  mostrarHora: boolean = false
  @ViewChild('btnMostrar') boton!: ElementRef;

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

  ngAfterViewInit() {
    // fromEvent(this.boton.nativeElement, 'click')
    //   .subscribe((event) => {
    //     alert('Has pulsado el botón')
    //   })
    of([1, 2, 3])
      .pipe(
        map(n => n.reverse())
      )
    .subscribe(n => console.log(n))

    of(1, 2, 3)
      .pipe(
        map(n => n*2)
      )
      .subscribe(n => console.log(n))

    from([1, 2, 3])
      .pipe(
        map(n => n*2)
      )
      .subscribe(n => console.log(n))


    fromEvent<MouseEvent>(document, 'mousemove')
      .pipe(
        filter((event: MouseEvent) => {
          console.log(event)
          const { clientX, clientY } = event
          return clientX > 400 && clientY < 300
        }),
        map((event: any) => {
          return { x: event.clientX, y: event.clientY }
        }),
        // take(10)
      )
      .subscribe((event: IPosicionRaton) => {
        console.log('Estás moviendo el ratón')
      })
  }

  toggleMostrarHora() {
    this.mostrarHora = !this.mostrarHora
  }

}

interface IPosicionRaton {
  x: number,
  y: number
}
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { interval, Observable, Subscriber, Subscription } from 'rxjs';
import { PagosService } from '../pagos.service';

@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.component.html',
  styleUrls: ['./suscripcion.component.css']
})
export class SuscripcionComponent implements OnInit {
  @Input() plataforma: string = ''
  @Input() precio: number = 4.95
  subEstado: boolean = false
  fechaProximoPago: Date = new Date()
  suscripcionPlataforma: Subscription | null = null
  cancelarSubs$ = new EventEmitter<boolean>()

  constructor(private pagosService: PagosService) { }

  ngOnInit(): void {
  }

  getFechaProximoPago(): Date {
    const fecha = new Date()
    fecha.setSeconds(fecha.getSeconds() + 4)
    return fecha
  }

  activarSuscripcion() {
    const observableSub = new Observable((subscriber: Subscriber<any>) => {
      this.subEstado = true
      this.fechaProximoPago = this.getFechaProximoPago()

      const subscription = interval(4000)
        .subscribe(() => {
          console.log('Se sigue ejecutando')
          if (this.pagosService.pagarSuscripcion()) {
            this.fechaProximoPago = this.getFechaProximoPago()
            subscriber.next('Te hemos cobrado ' + this.precio)

          } else {
            this.subEstado = false
            subscriber.error('No te hemos podido cobrar la suscripción. Revisa el método de pago y vuelve a suscribirte.')
            subscription.unsubscribe()
          }
        })

      // const intervalId = setInterval(() => {
      //   if (this.pagosService.pagarSuscripcion()) {
      //     this.fechaProximoPago = this.getFechaProximoPago()
      //     subscriber.next('Te hemos cobrado ' + this.precio)

      //   } else {
      //     this.subEstado = false
      //     subscriber.error('No te hemos podido cobrar la suscripción. Revisa el método de pago y vuelve a suscribirte.')
      //     clearInterval(intervalId)
      //   }

      // }, 4000)

      const subscripcionCancelar = this.cancelarSubs$.subscribe(() => {
        this.subEstado = false
        subscription.unsubscribe()
        subscriber.complete()
        subscripcionCancelar.unsubscribe()
      })
    })

    this.suscripcionPlataforma = observableSub.subscribe({
      next: (msg: string) => console.log(msg),
      error: (err: string) => console.log(err),
      complete: () => console.log('Ya no estás suscrito')
    })

  }

  cancelarSuscripcion() {
    // this.suscripcionPlataforma?.unsubscribe()
    // this.subEstado = false
    this.cancelarSubs$.emit(true)
  }

}

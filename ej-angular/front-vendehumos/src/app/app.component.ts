import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listaVendehumos: any = [
    {
      id: 1,
      nombre: 'Josheff Ajram',
      descripcion: '',
      categorias: ['Trading'],
      fechaAlta: new Date(2020, 2, 13),
      urlImagen: 'https://s1.eestatic.com/2020/05/31/invertia/mercados/josef_ajram-trading-inversion_494211857_152873690_1706x960.jpg',
      votadoPor: [2, 3],
      usuarioId: 1
    },
    {
      id: 2,
      nombre: 'Roberto Gamboa',
      descripcion: '',
      categorias: ['No se'],
      fechaAlta: new Date(2020, 2, 13),
      urlImagen: 'https://pbs.twimg.com/media/EhKkbyrXsAEZC8L.jpg',
      votadoPor: [1],
      usuarioId: 2
    },
    {
      id: 3,
      nombre: 'Willirex',
      descripcion: '',
      categorias: ['NFTs'],
      fechaAlta: new Date(2020, 2, 13),
      urlImagen: 'https://estaticos-cdn.sport.es/clip/6fc2b974-35f4-42c5-a13e-cd751b47ce7d_alta-libre-aspect-ratio_default_0.jpg',
      votadoPor: [1, 2],
      usuarioId: 2
    }
  ]

}


// class Vendehumo {
//   constructor(public id: number) {

//   }
// }
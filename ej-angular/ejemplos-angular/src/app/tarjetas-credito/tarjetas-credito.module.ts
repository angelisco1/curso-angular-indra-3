import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaCreditoComponent } from './tarjeta-credito/tarjeta-credito.component';
import { OcultarDigitosPipe } from './ocultar-digitos.pipe';
import { TCRouting } from './tarjeta-credito.routes';


@NgModule({
  declarations: [
    TarjetaCreditoComponent,
    OcultarDigitosPipe
  ],
  imports: [
    CommonModule,
    TCRouting
  ],
  exports: [
    TarjetaCreditoComponent,
    // OcultarDigitosPipe
  ]
})
export class TarjetasCreditoModule { }

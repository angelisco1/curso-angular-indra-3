import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Cmp01DataBindingComponent } from './cmp01-data-binding/cmp01-data-binding.component';
import { Cmp02VariablesDePlantillaComponent } from './cmp02-variables-de-plantilla/cmp02-variables-de-plantilla.component';
import { ReproductorComponent } from './cmp02-variables-de-plantilla/reproductor/reproductor.component';
import { Cmp03InputYOutputComponent } from './cmp03-input-y-output/cmp03-input-y-output.component';
import { SugusComponent } from './cmp03-input-y-output/sugus/sugus.component';
import { MiBotonComponent } from './cmp03-input-y-output/mi-boton/mi-boton.component';
import { LukeComponent } from './cmp03-input-y-output/luke/luke.component';
import { LeiaComponent } from './cmp03-input-y-output/leia/leia.component';
import { Cmp04DirectivasComponent } from './cmp04-directivas/cmp04-directivas.component';
import { MarcarDirective } from './cmp04-directivas/marcar.directive';
import { PowerModeDirective } from './cmp04-directivas/power-mode.directive';
import { Cmp05PipesComponent } from './cmp05-pipes/cmp05-pipes.component';
import { DoblePipe } from './cmp05-pipes/pipes/doble.pipe';
import { FiltroPipe } from './cmp05-pipes/pipes/filtro.pipe';
import { ReversePipe } from './cmp05-pipes/pipes/reverse.pipe';
import { OcultarPalabrasPipe } from './cmp05-pipes/pipes/ocultar-palabras.pipe';
import { Cmp06FormulariosComponent } from './cmp06-formularios/cmp06-formularios.component';
import { DePlantillaComponent } from './cmp06-formularios/de-plantilla/de-plantilla.component';
import { ReactivoComponent } from './cmp06-formularios/reactivo/reactivo.component';
import { ErrorComponent } from './cmp06-formularios/error/error.component';
import { Cmp07ServiciosComponent } from './cmp07-servicios/cmp07-servicios.component';
import { CmpAComponent } from './cmp07-servicios/cmp-a/cmp-a.component';
import { CmpBComponent } from './cmp07-servicios/cmp-b/cmp-b.component';
import { Cmp08ObservablesComponent } from './cmp08-observables/cmp08-observables.component';
import { SuscripcionComponent } from './cmp08-observables/suscripcion/suscripcion.component';
import { FechaActualComponent } from './cmp08-observables/fecha-actual/fecha-actual.component';
import { Cmp09HttpComponent } from './cmp09-http/cmp09-http.component';

@NgModule({
  declarations: [
    AppComponent,
    Cmp01DataBindingComponent,
    Cmp02VariablesDePlantillaComponent,
    ReproductorComponent,
    Cmp03InputYOutputComponent,
    SugusComponent,
    MiBotonComponent,
    LukeComponent,
    LeiaComponent,
    Cmp04DirectivasComponent,
    MarcarDirective,
    PowerModeDirective,
    Cmp05PipesComponent,
    DoblePipe,
    FiltroPipe,
    ReversePipe,
    OcultarPalabrasPipe,
    Cmp06FormulariosComponent,
    DePlantillaComponent,
    ReactivoComponent,
    ErrorComponent,
    Cmp07ServiciosComponent,
    CmpAComponent,
    CmpBComponent,
    Cmp08ObservablesComponent,
    SuscripcionComponent,
    FechaActualComponent,
    Cmp09HttpComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

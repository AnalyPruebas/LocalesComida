import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservaRoutingModule } from './reserva-routing.module';
import { RutaListarReservaComponent } from './rutas-reserva/listar-reserva/ruta-listar-reserva.component';

@NgModule({
  declarations: [RutaListarReservaComponent],
  imports: [
    CommonModule,
    ReservaRoutingModule
  ],
  exports: [RutaListarReservaComponent]
})
export class ReservaModule { }

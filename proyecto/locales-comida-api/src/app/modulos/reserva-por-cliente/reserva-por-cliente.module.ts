import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservaPorClienteRoutingModule } from './reserva-por-cliente-routing.module';
import { RutaListarReservaPorClienteComponent } from './rutas-reserva-por-cliente/listar-reserva-por-cliente/ruta-listar-reserva-por-cliente.component';

@NgModule({
  declarations: [RutaListarReservaPorClienteComponent],
  imports: [
    CommonModule,
    ReservaPorClienteRoutingModule
  ],
  exports: [RutaListarReservaPorClienteComponent]
})
export class ReservaPorClienteModule { }



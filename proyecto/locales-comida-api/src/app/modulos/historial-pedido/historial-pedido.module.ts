import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistorialPedidoRoutingModule } from './historial-pedido-routing.module';
import { RutaListarHistorialPedidoComponent } from './rutas-historial-pedido/listar-historial-pedido/ruta-listar-historial-pedido.component';

@NgModule({
  declarations: [RutaListarHistorialPedidoComponent],
  imports: [
    CommonModule,
    HistorialPedidoRoutingModule
  ],
  exports: [RutaListarHistorialPedidoComponent]
})
export class HistorialPedidoModule { }

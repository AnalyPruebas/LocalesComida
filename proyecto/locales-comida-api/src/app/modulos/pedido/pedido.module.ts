import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoRoutingModule } from './pedido-routing.module';
import { RutaListarPedidoComponent } from './rutas-pedido/listar-pedido/ruta-listar-pedido.component';
import { ActivoPipe } from 'src/app/pipes/activo.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    RutaListarPedidoComponent,
  ],
  imports: [
    CommonModule,
    PedidoRoutingModule,
    HttpClientModule,
  ],
  exports: [RutaListarPedidoComponent]
})
export class PedidoModule { }

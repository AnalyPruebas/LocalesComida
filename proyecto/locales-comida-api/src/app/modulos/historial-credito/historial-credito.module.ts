import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistorialCreditoRoutingModule } from './historial-credito-routing.module';
import { RutaListarHistorialCreditoComponent } from './rutas-historial-credito/listar-historial-credito/ruta-listar-historial-credito.component';

@NgModule({
  declarations: [RutaListarHistorialCreditoComponent],
  imports: [
    CommonModule,
    HistorialCreditoRoutingModule
  ],
  exports: [RutaListarHistorialCreditoComponent]
})
export class HistorialCreditoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditoRoutingModule } from './credito-routing.module';
import { RutaListarCreditoComponent } from './rutas-credito/listar-credito/ruta-listar-credito.component';

@NgModule({
  declarations: [RutaListarCreditoComponent],
  imports: [
    CommonModule,
    CreditoRoutingModule
  ],
  exports: [RutaListarCreditoComponent]
})
export class CreditoModule { }

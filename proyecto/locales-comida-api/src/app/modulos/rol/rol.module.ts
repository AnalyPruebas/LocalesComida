import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolRoutingModule } from './rol-routing.module';
import { RutaListarRolComponent } from './rutas-rol/listar-rol/ruta-listar-rol.component';

@NgModule({
  declarations: [RutaListarRolComponent],
  imports: [
    CommonModule,
    RolRoutingModule
  ],
  exports: [RutaListarRolComponent]
})
export class RolModule { }

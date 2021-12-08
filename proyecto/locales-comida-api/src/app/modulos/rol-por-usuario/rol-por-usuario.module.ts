import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolPorUsuarioRoutingModule } from './rol-por-usuario-routing.module';
import { RutaListarRolPorUsuarioComponent } from './rutas-rol-por-usuario/listar-rol-por-usuario/ruta-listar-rol-por-usuario.component';

@NgModule({
  declarations: [RutaListarRolPorUsuarioComponent],
  imports: [
    CommonModule,
    RolPorUsuarioRoutingModule
  ],
  exports: [RutaListarRolPorUsuarioComponent]
})
export class RolPorUsuarioModule { }

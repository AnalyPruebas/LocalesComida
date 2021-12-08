import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { RutaListarUsuarioComponent } from './rutas-usuario/listar-usuario/ruta-listar-usuario.component';

@NgModule({
  declarations: [RutaListarUsuarioComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ],
  exports: [RutaListarUsuarioComponent]
})
export class UsuarioModule { }

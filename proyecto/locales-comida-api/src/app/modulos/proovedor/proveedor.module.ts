import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedorRoutingModule } from './proveedor-routing.module';
import { RutaListarProveedorComponent } from './rutas-proveedor/listar-proveedor/ruta-listar-proveedor.component';

@NgModule({
  declarations: [RutaListarProveedorComponent],
  imports: [
    CommonModule,
    ProveedorRoutingModule
  ],
  exports: [RutaListarProveedorComponent]
})
export class ProveedorModule { }

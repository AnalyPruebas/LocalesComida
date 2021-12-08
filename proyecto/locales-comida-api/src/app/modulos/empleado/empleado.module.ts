import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadoRoutingModule } from './empleado-routing.module';
import { RutaListarEmpleadoComponent } from './rutas-empleado/listar-empleado/ruta-listar-empleado.component';

@NgModule({
  declarations: [RutaListarEmpleadoComponent],
  imports: [
    CommonModule,
    EmpleadoRoutingModule
  ],
  exports: [RutaListarEmpleadoComponent]
})
export class EmpleadoModule { }

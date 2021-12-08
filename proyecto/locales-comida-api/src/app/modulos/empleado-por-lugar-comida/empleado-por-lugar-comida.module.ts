import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadoPorLugarComidaRoutingModule } from './empleado-por-lugar-comida-routing.module';
import { RutaListarEmpleadoPorLugarComidaComponent } from './rutas-empleado-por-lugar-comida/listar-empleado-por-lugar-comida/ruta-listar-emple-lugar-comi.component';

@NgModule({
  declarations: [RutaListarEmpleadoPorLugarComidaComponent],
  imports: [
    CommonModule,
    EmpleadoPorLugarComidaRoutingModule
  ],
  exports: [RutaListarEmpleadoPorLugarComidaComponent]
})
export class EmpleadoPorLugarComidaModule { }

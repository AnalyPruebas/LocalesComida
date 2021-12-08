import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorarioAtencionRoutingModule } from './horario-atencion-routing.module';
import { RutaListarHorarioAtencionComponent } from './rutas-horario-atencion/listar-horario-atencion/ruta-listar-horario-atencion.component';

@NgModule({
  declarations: [RutaListarHorarioAtencionComponent],
  imports: [
    CommonModule,
    HorarioAtencionRoutingModule
  ],
  exports: [RutaListarHorarioAtencionComponent]
})
export class HorarioAtencionModule { }

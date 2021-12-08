import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoLugarComidaRoutingModule } from './contacto-lugar-comida-routing.module';
import { RutaListarContactoLugarComidaComponent } from './rutas-contacto-lugar-comida/listar-contacto-lugar-comida/ruta-listar-contacto-lugar-comida.component';

@NgModule({
  declarations: [RutaListarContactoLugarComidaComponent],
  imports: [
    CommonModule,
    ContactoLugarComidaRoutingModule
  ],
  exports: [RutaListarContactoLugarComidaComponent]
})
export class ContactoLugarComidaModule { }

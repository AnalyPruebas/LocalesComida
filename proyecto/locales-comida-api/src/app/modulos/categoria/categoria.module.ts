import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { ListarCategoriaComponent } from './rutas-categoria/listar-categoria/listar-categoria.component';

@NgModule({
  declarations: [ListarCategoriaComponent],
  imports: [
    CommonModule,
    CategoriaRoutingModule
  ],
  exports: [ListarCategoriaComponent]
})
export class CategoriaModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { RutaListarProductoComponent } from './rutas-producto/listar-producto/ruta-listar-producto.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivoPipe } from 'src/app/pipes/activo.pipe';

@NgModule({
  declarations: [
    RutaListarProductoComponent,
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    HttpClientModule,
  ],
  exports: [RutaListarProductoComponent]
})
export class ProductoModule { }

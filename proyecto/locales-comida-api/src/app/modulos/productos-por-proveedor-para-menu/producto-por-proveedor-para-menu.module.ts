import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoPorProveedorParaMenuRoutingModule } from './producto-por-proveedor-para-menu-routing.module';
import { RutaListarProductoPorProveedorParaMenuComponent } from './rutas-produc-proveedor-menu/listar-produc-provee-menu/ruta-listar-produ-provee-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductosPorProveedorParaMenuComponent } from './componentes/listar-productos-proveedor-menu/productos-proveedor-menu.component';
import { ActivoPipe } from 'src/app/pipes/activo.pipe';

@NgModule({
  declarations: [
    RutaListarProductoPorProveedorParaMenuComponent,
    ProductosPorProveedorParaMenuComponent,
  ],
  imports: [
    CommonModule,
    ProductoPorProveedorParaMenuRoutingModule,
    HttpClientModule,
  ],
  exports: [RutaListarProductoPorProveedorParaMenuComponent]
})
export class ProductoPorProveedorParaMenuModule { }

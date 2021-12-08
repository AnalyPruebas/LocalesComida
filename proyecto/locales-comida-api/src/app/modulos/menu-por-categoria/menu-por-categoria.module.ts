import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataViewModule} from 'primeng/dataview';
import { MenuPorCategoriaRoutingModule } from './menu-por-categoria-routing.module';
// tslint:disable-next-line:max-line-length
import { RutaListarMenuPorCategoriaComponent } from './rutas-menu-por-categoria/listar-menu-por-categoria/ruta-listar-menu-por-categoria.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuPorCategoriaComponent } from './componentes/listar-menu-por-categoria/menu-por-categoria.component';
import { RutaCarritoMenuCategComponent } from './rutas-menu-por-categoria/carrito-menu-categ/ruta-carrito-menu-categ.component';
import {CarritoMenuPorCategoria} from './componentes/carrito-menu-por-categoria/carrito-menu-por-categoria.component';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';
import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';
import {TableModule} from 'primeng/table';
import {ProductoPorProveedorParaMenuModule} from '../productos-por-proveedor-para-menu/producto-por-proveedor-para-menu.module';
import {MenuPorCategoriaService} from './servicios/menu-por-categoria.service';

@NgModule({
  declarations: [
    RutaListarMenuPorCategoriaComponent,
    MenuPorCategoriaComponent,
    RutaCarritoMenuCategComponent,
    CarritoMenuPorCategoria,
  ],
  imports: [
    CommonModule,
    MenuPorCategoriaRoutingModule,
    DataViewModule,
    HttpClientModule,
    DropdownModule,
    FormsModule,
    PanelModule,
    DialogModule,
    TableModule,
    ProductoPorProveedorParaMenuModule,
  ],
  providers: [
    MenuPorCategoriaService,
  ],
  exports: [RutaListarMenuPorCategoriaComponent, RutaCarritoMenuCategComponent]
})
export class MenuPorCategoriaModule { }

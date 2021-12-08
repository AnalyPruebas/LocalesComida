import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoRoutingModule } from './carrito-routing.module';
import { RutaLocalesComponent } from './rutas-carrito/ruta-locales/ruta-locales.component';
import { RutaComprarComponent } from './rutas-carrito/ruta-comprar/ruta-comprar.component';
import { RutaFinalizarComponent } from './rutas-carrito/ruta-finalizar/ruta-finalizar.component';
import { LocalesComponent } from './componentes/locales/locales.component';
import { FinalizarComponent } from './componentes/finalizar/finalizar.component';
import { ComprarComponent } from './componentes/comprar/comprar.component';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {MenuPorCategoriaService} from "../menu-por-categoria/servicios/menu-por-categoria.service";
import {LugarComidaModule} from "../lugar-comida/lugar-comida.module";
import {CarritoService} from './servicios/carrito.service';


@NgModule({
  declarations: [
    RutaLocalesComponent,
    RutaComprarComponent,
    RutaFinalizarComponent,
    LocalesComponent,
    FinalizarComponent,
    ComprarComponent
  ],
  imports: [
    CommonModule,
    CarritoRoutingModule,
    DialogModule,
    ButtonModule,
    PanelModule,
    DataViewModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    TableModule,
    LugarComidaModule
  ],
  providers: [
    MenuPorCategoriaService,
    CarritoService,
  ],
  exports: [
    RutaLocalesComponent,
    RutaComprarComponent,
    RutaFinalizarComponent,
  ],
})
export class CarritoModule { }

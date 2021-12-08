import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { LugarComidaRoutingModule } from './lugar-comida-routing.module';
import { RutaListarLugarComidaComponent } from './rutas-lugar-comida/listar-lugar-comida/ruta-listar-lugar-comida.component';
import { LugarComidaComponent } from './componentes/listar-lugar-comida/lugar-comida.component';
import { ActivoPipe } from 'src/app/pipes/activo.pipe';
import { HttpClientModule } from '@angular/common/http';
import {LugarComidaService} from './servicios/lugar-comida.servicio';
import {EspacioPipe} from '../../pipes/espacio.pipe';
import {ReservaPipe} from '../../pipes/reserva.pipe';
import {TipoPipe} from '../../pipes/tipo.pipe';
import { CrearEditarLugarComComponent } from './componentes/crear-editar-lugar-com/crear-editar-lugar-com.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RutaCrearEditarLugarComComponent } from './rutas-lugar-comida/ruta-crear-editar-lugar-com/ruta-crear-editar-lugar-com.component';
import {MatDialogModule, MatInputModule} from '@angular/material';
import {ModalCrearEditarComponent} from './modales/modal-crear-editar/modal-crear-editar.component';
import {ToasterModule} from 'angular2-toaster';

@NgModule({
  declarations: [
    RutaListarLugarComidaComponent,
    LugarComidaComponent,
    ActivoPipe,
    EspacioPipe,
    ReservaPipe,
    TipoPipe,
    CrearEditarLugarComComponent,
    RutaCrearEditarLugarComComponent,
    ModalCrearEditarComponent,
  ],
  imports: [
    CommonModule,
    LugarComidaRoutingModule,
    TableModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    ToasterModule.forChild(),
  ],
  entryComponents: [
    ModalCrearEditarComponent,
  ],
  providers: [
    LugarComidaService
  ],
  exports: [RutaListarLugarComidaComponent, ActivoPipe, CrearEditarLugarComComponent, EspacioPipe, TipoPipe, ReservaPipe]
})
export class LugarComidaModule { }

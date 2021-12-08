import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { LugarRoutingModule } from './lugar-routing.module';
import { RutaListarLugarComponent } from './rutas-lugar/listar-lugar/ruta-listar-lugar.component';
import { LugarService } from './servicios/lugar.service';
import { ActivoPipe } from 'src/app/pipes/activo.pipe';
import { LugarComponent } from './componentes/listar-lugar/lugar.component';
import { HttpClientModule } from '@angular/common/http';
import {AppModule} from '../../app.module';

@NgModule({
  declarations: [
    RutaListarLugarComponent,
    LugarComponent,
  ],
  imports: [
    CommonModule,
    LugarRoutingModule,
    TableModule,
    HttpClientModule,
  ],
  providers: [
    LugarService,
  ],
  exports: [RutaListarLugarComponent]
})
export class LugarModule { }

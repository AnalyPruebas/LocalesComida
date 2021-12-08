import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { MenuRoutingModule } from './menu-routing.module';
import { RutaListarMenuComponent } from './rutas-menu/listar-menu/ruta-listar-menu.component';
import { ActivoPipe } from 'src/app/pipes/activo.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    RutaListarMenuComponent,
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    TableModule,
    HttpClientModule,
  ],
  exports: [RutaListarMenuComponent]
})
export class MenuModule { }

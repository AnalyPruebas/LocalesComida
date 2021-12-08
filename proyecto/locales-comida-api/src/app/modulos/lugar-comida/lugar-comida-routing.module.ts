import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutaListarLugarComidaComponent } from './rutas-lugar-comida/listar-lugar-comida/ruta-listar-lugar-comida.component';
import {RutaCrearEditarLugarComComponent} from './rutas-lugar-comida/ruta-crear-editar-lugar-com/ruta-crear-editar-lugar-com.component';

const routes: Routes = [
  {
    path: 'crear',
    component: RutaCrearEditarLugarComComponent,
  },
  {
    path: 'editar/:idLugarComida',
    component: RutaCrearEditarLugarComComponent,
  },
  {
    path:  'listar',
    component: RutaListarLugarComidaComponent
  },
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // exports: [RouterModule]
})
export class LugarComidaRoutingModule { }

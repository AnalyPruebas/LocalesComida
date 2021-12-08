import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutaListarLugarComponent } from './rutas-lugar/listar-lugar/ruta-listar-lugar.component';

const rutasLugar: Routes = [
  {
    path: 'listar',
    component: RutaListarLugarComponent
  },
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(rutasLugar)],
  // exports: [RouterModule]
})
export class LugarRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutaListarMenuComponent } from './rutas-menu/listar-menu/ruta-listar-menu.component';

const routes: Routes = [
  {
    path: 'listar',
    component: RutaListarMenuComponent
  },
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// tslint:disable-next-line:max-line-length
import { RutaListarMenuPorCategoriaComponent } from './rutas-menu-por-categoria/listar-menu-por-categoria/ruta-listar-menu-por-categoria.component';
import {RutaCarritoMenuCategComponent} from './rutas-menu-por-categoria/carrito-menu-categ/ruta-carrito-menu-categ.component';

const routes: Routes = [
  {
    path: 'listar',
    component: RutaListarMenuPorCategoriaComponent
  },
  {
    path: 'comprar',
    component: RutaCarritoMenuCategComponent
  },
  {
    path: '',
    redirectTo: 'comprar',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuPorCategoriaRoutingModule { }

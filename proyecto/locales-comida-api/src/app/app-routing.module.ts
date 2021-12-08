import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NoEncontradoComponent} from './rutas/no-encontrado/no-encontrado.component';
import {MenuPrincipalComponent} from './rutas/menu-principal/menu-principal.component';

const routes: Routes = [
  {
    path: 'lugar-modulo',
    loadChildren: () => import('./modulos/lugar/lugar.module').then(mod => mod.LugarModule)
  },
  {
    path: 'lugar-comida-modulo',
    loadChildren: () => import('./modulos/lugar-comida/lugar-comida.module').then(mod => mod.LugarComidaModule)
  },
  {
    path: 'menu-categoria-modulo',
    loadChildren: () => import('./modulos/menu-por-categoria/menu-por-categoria.module').then(mod => mod.MenuPorCategoriaModule)
  },
  {
    path: 'carrito-modulo',
    loadChildren: () => import('./modulos/carrito/carrito.module').then(mod => mod.CarritoModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./modulos/login-menu/login.module').then(mod => mod.LoginModule)
  },
  {
    path: 'menu',
    component: MenuPrincipalComponent,
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NoEncontradoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LocalesComponent} from './componentes/locales/locales.component';
import {ComprarComponent} from './componentes/comprar/comprar.component';
import {FinalizarComponent} from './componentes/finalizar/finalizar.component';
import {RutaLocalesComponent} from './rutas-carrito/ruta-locales/ruta-locales.component';
import {RutaComprarComponent} from './rutas-carrito/ruta-comprar/ruta-comprar.component';


const routes: Routes = [
  {
    path: 'local',
    component: RutaLocalesComponent,
  },
  {
    path: 'comprar/:idLocal',
    component: RutaComprarComponent,
  },
  {
    path: 'finalizar-compra',
    component: FinalizarComponent
  },
  {
    path: '',
    redirectTo: 'local',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarritoRoutingModule { }

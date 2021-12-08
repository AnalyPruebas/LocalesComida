import {RouterModule, Routes} from '@angular/router';
import {RutaLoginComponent} from './rutas/ruta-login/ruta-login.component';
import {NgModule} from '@angular/core';

export const rutasLogin: Routes = [
  {
    path: 'login',
    component: RutaLoginComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forChild(rutasLogin)]
})
export class LoginRoutingModule {
}

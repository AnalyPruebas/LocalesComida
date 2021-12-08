import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginRoutingModule} from './login.routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {RutaLoginComponent} from './rutas/ruta-login/ruta-login.component';
import {LoginComponent} from './componentes/login/login.component';
import {AuthService} from '../../servicios/auth.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    RutaLoginComponent,
    LoginComponent,
  ],
  entryComponents: [
    LoginComponent,
  ],
  providers: [
    AuthService,
  ],
  exports: [
    LoginComponent,
  ]
})
export class LoginModule {}

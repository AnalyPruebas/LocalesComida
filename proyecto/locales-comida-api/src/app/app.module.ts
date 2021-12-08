import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FooterComponent} from './componentes/footer/footer.component';
import {ActivoPipe} from './pipes/activo.pipe';
import {LugarComidaModule} from './modulos/lugar-comida/lugar-comida.module';
import {ToasterModule} from 'angular2-toaster';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NoEncontradoComponent } from './rutas/no-encontrado/no-encontrado.component';
import { MenuPrincipalComponent } from './rutas/menu-principal/menu-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NoEncontradoComponent,
    MenuPrincipalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToasterModule.forRoot(),
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

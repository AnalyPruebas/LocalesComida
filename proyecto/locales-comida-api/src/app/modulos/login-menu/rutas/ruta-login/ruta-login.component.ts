import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.sass']
})
export class RutaLoginComponent implements OnInit {
  sesion;

  constructor(
    private readonly _router: Router
  ) { }

  ngOnInit() {
  }

  ingresar() {
    // const url = ['/inicio', 'menu-principal'];
    const url = ['/menu'];
    const parametros = {
      queryParams: {
        nombre: this.sesion.usuario,
      }
    };
    console.log('url', url, parametros);
    this._router.navigate(url, parametros).then(r => console.log(r)).catch(error => console.log(error));
  }

  iniciarSesion(usuario) {
    console.log(usuario);
    this.sesion = usuario;
  }
}

import { Injectable } from '@angular/core';
import { ServicioPrincipal } from 'src/app/constantes/clase-generica-service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MenuPorCategoriaService extends ServicioPrincipal {

    path = '/menu-por-categoria';
    constructor(
        private readonly _httClient: HttpClient
  ) {
    super(_httClient);
  }

  obtenerCarrito(skip, take) {
        return this._httClient.get(`${this.url}${this.path}/carrito?skip=${skip}&take=${take}`);
  }
}

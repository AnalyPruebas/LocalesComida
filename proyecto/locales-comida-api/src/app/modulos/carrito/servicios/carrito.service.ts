import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class CarritoService {

  url;
  path;
  constructor(
    private readonly _httpClient: HttpClient
  ) {
    this.url = environment.url;
  }

  obtenerCarrito(skip, take, idLugarComida) {
    this.path = '/menu-por-categoria';
    return this._httpClient.get(`${this.url}${this.path}/carrito/${idLugarComida}?skip=${skip}&take=${take}`);
  }

  obtenerTodos(skip, take) {
    return this._httpClient.get(`${this.url}${this.path}?skip=${skip}&take=${take}`);
  }
  guardar(datosAGuardar) {
    return this._httpClient.post(`${this.url}${this.path}`, datosAGuardar);
  }
  buscarParametros(paramretros) {
    this.path =  '/menu-por-categoria';
    console.log('url', `${this.url}${this.path}/query?criterioBusqueda=${paramretros}`);
    return this._httpClient.get(`${this.url}${this.path}/query?criterioBusqueda=${paramretros}`);
  }
  buscarId(id, skip, take) {
    return this._httpClient.get(`${this.url}${this.path}/${id}?skip=${skip}&take=${take}`);
  }
  update(idCiudad, ciudadActualizar, path) {
    const asdf = `${this.url}${path}/${idCiudad}`;
    // console.log('asd', asdf);
    return this._httpClient.put(`${this.url}${path}/${idCiudad}`, ciudadActualizar);
  }

  eliminar(idCiudad) {
    return this._httpClient.delete(`${this.url}${this.path}/${idCiudad}`);
  }
  pedido(datosAguardar) {
    this.path = '/pedido';
    console.log('url', `${this.url}${this.path}/crear-varios`, datosAguardar );
    return this._httpClient.post(`${this.url}${this.path}/crear-varios`, datosAguardar);
  }
  updateproductoPorProveedot(idMenu, menuActualizar) {
    // this.path = ;
    return this.update(idMenu, menuActualizar, 'producto-por-proveedor-para-menu');

  }
  updateproducto(idProducto, productoActualizar) {
    // this.path = ;
    return this.update(idProducto, productoActualizar, 'producto');

  }
}

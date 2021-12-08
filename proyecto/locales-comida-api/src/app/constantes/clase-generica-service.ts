import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class ServicioPrincipal {

  url;
  path;
  constructor(
    private readonly _httpClient: HttpClient
  ) {
    this.url = environment.url;
  }

  obtenerTodos(skip, take) {
    return this._httpClient.get(`${this.url}${this.path}?skip=${skip}&take=${take}`);
  }
  guardar(datosAGuardar) {
    return this._httpClient.post(`${this.url}${this.path}`, datosAGuardar);
  }
  buscarParametros(paramretros) {
    /*console.log(Object.keys(JSON.parse(paramretros)));
    console.log(Object.values(JSON.parse(paramretros)));
    */
    console.log('url ', `${this.url}${this.path}/query?criterioBusqueda=${paramretros}`);
    return this._httpClient.get(`${this.url}${this.path}/query?criterioBusqueda=${paramretros}`);
  }
  buscarId(id, skip, take) {
    return this._httpClient.get(`${this.url}${this.path}/${id}?skip=${skip}&take=${take}`);
  }
  update(idCiudad, ciudadActualizar) {
    const asdf = `${this.url}${this.path}/${idCiudad}`;
    // console.log('asd', asdf);
    return this._httpClient.put(`${this.url}${this.path}/${idCiudad}`, ciudadActualizar);
  }

  eliminar(idCiudad) {
    return this._httpClient.delete(`${this.url}${this.path}/${idCiudad}`);
  }
}

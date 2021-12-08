import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
name: 'tipoR'
})
export class TipoPipe implements PipeTransform {
  transform(tipo: any, ...args): any {
    return (tipo === '1') ? 'Comida rapida' : 'Restaurante';
  }
}

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'estado'
})
export class ActivoPipe implements PipeTransform {
  transform(input: boolean, ...args): any {
    return input ? 'Activo' : 'Inactivo';
  }
}

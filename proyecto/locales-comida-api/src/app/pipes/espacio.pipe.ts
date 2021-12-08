import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'espacio'
})
export class EspacioPipe implements PipeTransform {
  transform(espacio: any, ...args): any {
    return (espacio === '0') ? 'Abierto' : 'Cerrado';
  }
}

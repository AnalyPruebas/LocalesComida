import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'reserva'
})
export class ReservaPipe implements PipeTransform {
  transform(reserva: any, ...args): any {
    return !reserva ? 'No' : 'Si';
  }
}

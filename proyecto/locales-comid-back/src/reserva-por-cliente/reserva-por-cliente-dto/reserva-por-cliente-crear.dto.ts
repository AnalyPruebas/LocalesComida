import { IsNotEmpty, IsNumberString } from 'class-validator';
import { ESTADO_RESERVA } from '../../constantes/enums';

export class ReservaPorClienteCrearDto {
  @IsNumberString()
  @IsNotEmpty()
  personas: number;

  @IsNumberString()
  @IsNotEmpty()
  estado: ESTADO_RESERVA;
}

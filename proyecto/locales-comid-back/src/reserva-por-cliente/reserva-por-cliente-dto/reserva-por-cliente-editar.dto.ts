import { IsNumberString, IsOptional } from 'class-validator';
import { ESTADO_RESERVA } from '../../constantes/enums';

export class ReservaPorClienteEditarDto {
  @IsNumberString()
  @IsOptional()
  personas: number;

  @IsNumberString()
  @IsOptional()
  estado: ESTADO_RESERVA;
}

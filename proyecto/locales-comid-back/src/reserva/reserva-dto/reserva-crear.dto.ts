import { IsBooleanString, IsNotEmpty, IsString } from 'class-validator';

export class ReservaCrearDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  horaInicio: string;

  @IsString()
  @IsNotEmpty()
  horaFin: string;

  @IsBooleanString()
  @IsNotEmpty()
  habilitado: boolean;
}

import { IsString, IsNotEmpty, IsBooleanString } from 'class-validator';

export class HorarioAtencionCrearDto {
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

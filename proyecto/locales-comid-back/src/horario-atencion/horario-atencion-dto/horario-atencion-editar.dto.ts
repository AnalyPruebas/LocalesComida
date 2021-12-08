import { IsOptional, IsBooleanString, IsString } from 'class-validator';

export class HorarioAtencionEditarDto {
  @IsString()
  @IsOptional()
  nombre: string;

  @IsString()
  @IsOptional()
  horaInicio: string;

  @IsString()
  @IsOptional()
  horaFin: string;

  @IsBooleanString()
  @IsOptional()
  habilitado: boolean;
}

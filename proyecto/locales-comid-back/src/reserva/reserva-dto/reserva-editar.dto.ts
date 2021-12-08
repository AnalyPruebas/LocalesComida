import { IsBooleanString, IsOptional, IsString } from 'class-validator';

export class ReservaEditarDto {
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

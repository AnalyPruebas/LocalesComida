import { IsString, IsOptional, IsNumberString } from 'class-validator';

export class EmpleadoEditarDto {
  @IsString()
  @IsOptional()
  nombre: string;

  @IsOptional()
  @IsNumberString()
  identificacion: string;
}

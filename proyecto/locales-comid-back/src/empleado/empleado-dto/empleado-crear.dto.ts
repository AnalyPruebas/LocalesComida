import { IsString, IsNotEmpty, IsNumberString } from 'class-validator';

export class EmpleadoCrearDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  @IsNumberString()
  identificacion: string;
}

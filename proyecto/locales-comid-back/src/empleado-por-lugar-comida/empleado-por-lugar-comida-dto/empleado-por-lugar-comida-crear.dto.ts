import { IsBooleanString, IsNotEmpty } from 'class-validator';

export class EmpleadoPorLugarComidaCrearDto {
  @IsBooleanString()
  @IsNotEmpty()
  habilitado: boolean;
}

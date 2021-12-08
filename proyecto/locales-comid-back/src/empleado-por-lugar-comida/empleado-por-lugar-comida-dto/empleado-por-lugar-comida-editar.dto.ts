import { IsBooleanString, IsNotEmpty } from 'class-validator';

export class EmpleadoPorLugarComidaEditarDto {
  @IsBooleanString()
  @IsNotEmpty()
  habilitado: boolean;
}

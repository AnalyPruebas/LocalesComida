import { IsString, IsOptional, IsNumberString } from 'class-validator';

export class MenuPorCategoriaEditarDto {
  @IsString()
  @IsOptional()
  nombre: string;

  @IsNumberString()
  @IsOptional()
  precioUnitario: number;
}

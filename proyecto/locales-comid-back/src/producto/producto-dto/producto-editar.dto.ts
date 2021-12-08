import { IsString, IsOptional, IsNumberString } from 'class-validator';

export class ProductoEditarDto {
  @IsString()
  @IsOptional()
  nombre: string;

  @IsNumberString()
  @IsOptional()
  cantidad: number;

  @IsNumberString()
  @IsOptional()
  precioUnitario: number;
}

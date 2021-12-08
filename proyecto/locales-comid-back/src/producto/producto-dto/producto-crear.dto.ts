import { IsString, IsNotEmpty, IsNumberString } from 'class-validator';

export class ProductoCrearDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsNumberString()
  @IsNotEmpty()
  cantidad: number;

  @IsNumberString()
  @IsNotEmpty()
  precioUnitario: number;
}

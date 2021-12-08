import { IsNotEmpty, IsNumberString } from 'class-validator';

export class ProductoPorProveedorParaMenuCrearDto {
  @IsNumberString()
  @IsNotEmpty()
  cantidad: number;
}

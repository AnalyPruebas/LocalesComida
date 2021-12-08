import { IsNotEmpty, IsNumberString } from 'class-validator';

export class ProductoPorProveedorParaMenuEditarDto {
  @IsNumberString()
  @IsNotEmpty()
  cantidad: number;
}

import { IsString, IsNotEmpty, IsNumberString } from 'class-validator';

export class MenuPorCategoriaCrearDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsNumberString()
  @IsNotEmpty()
  precioUnitario: number;
}

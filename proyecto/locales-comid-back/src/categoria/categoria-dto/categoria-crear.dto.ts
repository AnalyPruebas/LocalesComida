import { IsString, IsNotEmpty, IsBooleanString } from 'class-validator';

export class CategoriaCrearDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsBooleanString()
  @IsNotEmpty()
  habilitado: boolean;
}

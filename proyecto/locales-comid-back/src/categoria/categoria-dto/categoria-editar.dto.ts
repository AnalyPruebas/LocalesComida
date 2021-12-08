import { IsString, IsOptional, IsBooleanString } from 'class-validator';

export class CategoriaEditarDto {
  @IsString()
  @IsOptional()
  nombre: string;

  @IsBooleanString()
  @IsOptional()
  habilitado: boolean;
}

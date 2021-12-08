import { IsNotEmpty, IsString } from 'class-validator';

export class ProveedorCrearDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;
}

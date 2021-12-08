import { IsNotEmpty, IsString } from 'class-validator';

export class RolEditarDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;
}

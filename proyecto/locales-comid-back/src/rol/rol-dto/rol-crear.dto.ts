import { IsNotEmpty, IsString } from 'class-validator';

export class RolCrearDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;
}

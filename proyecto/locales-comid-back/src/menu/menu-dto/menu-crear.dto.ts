import { IsString, IsNotEmpty } from 'class-validator';

export class MenuCrearDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;
}

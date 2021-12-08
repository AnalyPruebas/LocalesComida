import { IsString, IsNotEmpty } from 'class-validator';

export class LugarCrearDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;
}

import { IsOptional, IsString } from 'class-validator';

export class LugarEditarDto {
  @IsString()
  @IsOptional()
  nombre: string;
}

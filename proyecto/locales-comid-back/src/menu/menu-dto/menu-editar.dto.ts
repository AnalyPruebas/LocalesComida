import { IsString, IsOptional } from 'class-validator';

export class MenuEditarDto {
  @IsString()
  @IsOptional()
  nombre: string;
}

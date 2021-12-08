import { IsEmail, IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class ContactoLugarComidaEditarDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsOptional()
  telefono: string;

  @IsString()
  @IsOptional()
  celular: string;

  @IsString()
  @IsOptional()
  @IsEmail()
  email: string;
}

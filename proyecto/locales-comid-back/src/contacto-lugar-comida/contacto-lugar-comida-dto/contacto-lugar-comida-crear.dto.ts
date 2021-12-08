import { IsOptional, IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class ContactoLugarComidaCrearDto {
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

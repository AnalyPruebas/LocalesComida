import { IsString, IsOptional, IsEmail } from 'class-validator';

export class UsuarioEditarDto {
  @IsString()
  @IsOptional()
  nombre: string;

  @IsString()
  @IsOptional()
  apellido: string;

  @IsString()
  @IsOptional()
  @IsEmail()
  correo: string;

  @IsString()
  @IsOptional()
  direccion: string;

  @IsString()
  @IsOptional()
  celular: string;
}

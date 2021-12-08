import {
  IsString,
  IsNotEmpty,
  IsNumberString,
  IsBooleanString,
  IsOptional,
} from 'class-validator';
import { ESPACIO_LUGAR, TIPO_LUGAR } from '../../constantes/enums';

export class LugarComidaCrearDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsOptional()
  direccion: string;

  @IsNumberString()
  @IsNotEmpty()
  espacio: ESPACIO_LUGAR;

  @IsBooleanString()
  @IsNotEmpty()
  reservas: boolean;

  @IsNumberString()
  @IsNotEmpty()
  tipo: TIPO_LUGAR;
}

import {
  IsString,
  IsOptional,
  IsNumberString,
  IsBooleanString,
} from 'class-validator';
import { ESPACIO_LUGAR, TIPO_LUGAR } from '../../constantes/enums';

export class LugarComidaEditarDto {
  @IsString()
  @IsOptional()
  nombre: string;

  @IsString()
  @IsOptional()
  direccion: string;

  @IsNumberString()
  @IsOptional()
  espacio: ESPACIO_LUGAR;

  @IsBooleanString()
  @IsOptional()
  reservas: boolean;

  @IsNumberString()
  @IsOptional()
  tipo: TIPO_LUGAR;
}

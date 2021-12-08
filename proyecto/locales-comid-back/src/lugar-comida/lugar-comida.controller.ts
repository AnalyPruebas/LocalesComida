import { Controller } from '@nestjs/common';
import { ControladorPrincipal } from '../clases-genericas/controladorPrincipal';
import { LugarComidaEntity } from './lugar-comida.entity';
import { LugarComidaService } from './lugar-comida.service';
import { LugarComidaCrearDto } from './lugar-comida-dto/lugar-comida-crear.dto';
import { LugarComidaEditarDto } from './lugar-comida-dto/lugar-comida-editar.dto';

@Controller('lugar-comida')
export class LugarComidaController extends ControladorPrincipal<
  LugarComidaEntity
> {
  crearDto = LugarComidaCrearDto;
  editarDto = LugarComidaEditarDto;
  constructor(private readonly _lugarComidaService: LugarComidaService) {
    super(_lugarComidaService);
  }
}

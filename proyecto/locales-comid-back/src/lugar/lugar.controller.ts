import { Controller } from '@nestjs/common';

import { LugarEntity } from './lugar.entity';
import { LugarService } from './lugar.service';
import { LugarCrearDto } from './lugar-dto/lugar-crear.dto';
import { LugarEditarDto } from './lugar-dto/lugar-editar.dto';
import { ControladorPrincipal } from '../clases-genericas/controladorPrincipal';

@Controller('lugar')
export class LugarController extends ControladorPrincipal<LugarEntity> {
  crearDto = LugarCrearDto;
  editarDto = LugarEditarDto;
  constructor(private readonly _lugarService: LugarService) {
    super(_lugarService);
  }
}

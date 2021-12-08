import { Controller } from '@nestjs/common';
import { ControladorPrincipal } from '../clases-genericas/controladorPrincipal';
import { HorarioAtencionEntity } from './horario-atencion.entity';
import { HorarioAtencionService } from './horario-atencion.service';
import { HorarioAtencionCrearDto } from './horario-atencion-dto/horario-atencion-crear.dto';
import { HorarioAtencionEditarDto } from './horario-atencion-dto/horario-atencion-editar.dto';

@Controller('horario-atencion')
export class HorarioAtencionController extends ControladorPrincipal<
  HorarioAtencionEntity
> {
  crearDto = HorarioAtencionCrearDto;
  editarDto = HorarioAtencionEditarDto;
  constructor(
    private readonly _horarioAtencionService: HorarioAtencionService,
  ) {
    super(_horarioAtencionService);
  }
}

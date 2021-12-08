import { Controller } from '@nestjs/common';
import { ControladorPrincipal } from '../clases-genericas/controladorPrincipal';
import { ReservaEntity } from './reserva.entity';
import { ReservaService } from './reserva.service';
import { ReservaCrearDto } from './reserva-dto/reserva-crear.dto';
import { ReservaEditarDto } from './reserva-dto/reserva-editar.dto';

@Controller('reserva')
export class ReservaController extends ControladorPrincipal<ReservaEntity> {
  crearDto = ReservaCrearDto;
  editarDto = ReservaEditarDto;
  constructor(private readonly _reservaService: ReservaService) {
    super(_reservaService);
  }
}

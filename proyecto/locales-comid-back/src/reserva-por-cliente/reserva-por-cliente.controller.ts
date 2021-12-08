import { Controller } from '@nestjs/common';
import { ControladorPrincipal } from '../clases-genericas/controladorPrincipal';
import { ReservaPorClienteEntity } from './reserva-por-cliente.entity';
import { ReservaPorClienteService } from './reserva-por-cliente.service';
import { ReservaPorClienteCrearDto } from './reserva-por-cliente-dto/reserva-por-cliente-crear.dto';
import { ReservaPorClienteEditarDto } from './reserva-por-cliente-dto/reserva-por-cliente-editar.dto';

@Controller('reserva-por-cliente')
export class ReservaPorClienteController extends ControladorPrincipal<
  ReservaPorClienteEntity
> {
  crearDto = ReservaPorClienteCrearDto;
  editarDto = ReservaPorClienteEditarDto;
  constructor(
    private readonly _reservaPorClienteService: ReservaPorClienteService,
  ) {
    super(_reservaPorClienteService);
  }
}

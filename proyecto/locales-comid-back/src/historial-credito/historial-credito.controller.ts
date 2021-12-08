import { Controller } from '@nestjs/common';
import { HistorialCreditoEntity } from './historial-credito.entity';
import { ControladorPrincipal } from '../clases-genericas/controladorPrincipal';
import { HistorialCreditoService } from './historial-credito.service';
import { HistorialCreditoCrearDto } from './historial-credito-dto/historial-credito-crear.dto';
import { HistorialCreditoEditarDto } from './historial-credito-dto/historial-credito-editar.dto';

@Controller('historial-credito')
export class HistorialCreditoController extends ControladorPrincipal<
  HistorialCreditoEntity
> {
  crearDto = HistorialCreditoCrearDto;
  editarDto = HistorialCreditoEditarDto;
  constructor(
    private readonly _historialCreditoService: HistorialCreditoService,
  ) {
    super(_historialCreditoService);
  }
}

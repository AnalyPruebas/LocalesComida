import { Controller } from '@nestjs/common';
import { ControladorPrincipal } from '../clases-genericas/controladorPrincipal';
import { HistorialPedidoEntity } from './historial-pedido.entity';
import { HistorialPedidoService } from './historial-pedido.service';
import { HistorialPedidoCrearDto } from './historial-pedido-dto/historial-pedido-crear.dto';
import { HistorialPedidoEditarDto } from './historial-pedido-dto/historial-pedido-editar.dto';

@Controller('historial-pedido')
export class HistorialPedidoController extends ControladorPrincipal<
  HistorialPedidoEntity
> {
  crearDto = HistorialPedidoCrearDto;
  editarDto = HistorialPedidoEditarDto;
  constructor(
    private readonly _historialPedidoService: HistorialPedidoService,
  ) {
    super(_historialPedidoService);
  }
}

import { Controller } from '@nestjs/common';
import { ControladorPrincipal } from '../clases-genericas/controladorPrincipal';
import { PedidoEntity } from './pedido.entity';
import { PedidoService } from './pedido.service';
import { PedidoCrearDto } from './pedido-dto/pedido-crear.dto';
import { PedidoEditarDto } from './pedido-dto/pedido-editar.dto';

@Controller('pedido')
export class PedidoController extends ControladorPrincipal<PedidoEntity> {
  crearDto = PedidoCrearDto;
  editarDto = PedidoEditarDto;
  constructor(private readonly _pedidoService: PedidoService) {
    super(_pedidoService);
  }
}

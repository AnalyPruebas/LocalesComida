import { Controller } from '@nestjs/common';
import { ControladorPrincipal } from '../clases-genericas/controladorPrincipal';
import { CreditoEntity } from './credito.entity';
import { CreditoService } from './credito.service';
import { CreditoCrearDto } from './credito-dto/credito-crear.dto';
import { CreditoEditarDto } from './credito-dto/credito-editar.dto';

@Controller('credito')
export class CreditoController extends ControladorPrincipal<CreditoEntity> {
  crearDto = CreditoCrearDto;
  editarDto = CreditoEditarDto;
  constructor(private readonly _creditoService: CreditoService) {
    super(_creditoService);
  }
}

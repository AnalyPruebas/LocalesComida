import { Controller } from '@nestjs/common';
import { ControladorPrincipal } from '../clases-genericas/controladorPrincipal';
import { RolPorUsuarioEntity } from './rol-por-usuario.entity';
import { RolPorUsuarioService } from './rol-por-usuario.service';
import { RolPorUsuarioCrearDto } from './rol-por-usuario-dto/rol-por-usuario-crear.dto';
import { RolPorUsuarioEditarDto } from './rol-por-usuario-dto/rol-por-usuario-editar.dto';

@Controller('rol-por-usuario')
export class RolPorUsuarioController extends ControladorPrincipal<
  RolPorUsuarioEntity
> {
  crearDto = RolPorUsuarioCrearDto;
  editarDto = RolPorUsuarioEditarDto;
  constructor(private readonly _rolPorUsuarioService: RolPorUsuarioService) {
    super(_rolPorUsuarioService);
  }
}

import { Controller } from '@nestjs/common';
import { ControladorPrincipal } from '../clases-genericas/controladorPrincipal';
import { RolEntity } from './rol.entity';
import { RolService } from './rol.service';
import { RolCrearDto } from './rol-dto/rol-crear.dto';
import { RolEditarDto } from './rol-dto/rol-editar.dto';

@Controller('rol')
export class RolController extends ControladorPrincipal<RolEntity> {
  crearDto = RolCrearDto;
  editarDto = RolEditarDto;
  constructor(private readonly _rolService: RolService) {
    super(_rolService);
  }
}

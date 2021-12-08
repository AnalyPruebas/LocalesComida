import { Controller } from '@nestjs/common';
import { ControladorPrincipal } from '../clases-genericas/controladorPrincipal';
import { EmpleadoEntity } from './empleado.entity';
import { EmpleadoService } from './empleado.service';
import { EmpleadoCrearDto } from './empleado-dto/empleado-crear.dto';
import { EmpleadoEditarDto } from './empleado-dto/empleado-editar.dto';

@Controller('empleado')
export class EmpleadoController extends ControladorPrincipal<EmpleadoEntity> {
  crearDto = EmpleadoCrearDto;
  editarDto = EmpleadoEditarDto;
  constructor(private readonly _empleadoService: EmpleadoService) {
    super(_empleadoService);
  }
}

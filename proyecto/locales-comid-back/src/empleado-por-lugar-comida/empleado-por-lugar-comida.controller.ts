import { Controller } from '@nestjs/common';
import { ControladorPrincipal } from '../clases-genericas/controladorPrincipal';
import { EmpleadoPorLugarComidaEntity } from './empleado-por-lugar-comida.entity';
import { EmpleadoPorLugarComidaService } from './empleado-por-lugar-comida.service';
import { EmpleadoPorLugarComidaCrearDto } from './empleado-por-lugar-comida-dto/empleado-por-lugar-comida-crear.dto';
import { EmpleadoPorLugarComidaEditarDto } from './empleado-por-lugar-comida-dto/empleado-por-lugar-comida-editar.dto';

@Controller('empleado-por-lugar-comida')
export class EmpleadoPorLugarComidaController extends ControladorPrincipal<
  EmpleadoPorLugarComidaEntity
> {
  crearDto = EmpleadoPorLugarComidaCrearDto;
  editarDto = EmpleadoPorLugarComidaEditarDto;
  constructor(
    private readonly _empleadoPorLugarComidaService: EmpleadoPorLugarComidaService,
  ) {
    super(_empleadoPorLugarComidaService);
  }
}

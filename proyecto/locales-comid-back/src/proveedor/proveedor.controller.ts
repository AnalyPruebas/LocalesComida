import { Controller } from '@nestjs/common';
import { ProveedorEntity } from './proveedor.entity';
import { ProveedorService } from './proveedor.service';
import { ControladorPrincipal } from '../clases-genericas/controladorPrincipal';
import { ProveedorCrearDto } from './proveedor-dto/proveedor-crear.dto';
import { ProveedorEditarDto } from './proveedor-dto/proveedor-editar.dto';

@Controller('proveedor')
export class ProveedorController extends ControladorPrincipal<ProveedorEntity> {
  crearDto = ProveedorCrearDto;
  editarDto = ProveedorEditarDto;
  constructor(private readonly _proveedorService: ProveedorService) {
    super(_proveedorService);
  }
}

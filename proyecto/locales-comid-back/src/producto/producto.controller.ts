import { Controller } from '@nestjs/common';
import { ControladorPrincipal } from '../clases-genericas/controladorPrincipal';
import { ProductoService } from './producto.service';
import { ProductoEntity } from './producto.entity';
import { ProductoCrearDto } from './producto-dto/producto-crear.dto';
import { ProductoEditarDto } from './producto-dto/producto-editar.dto';

@Controller('producto')
export class ProductoController extends ControladorPrincipal<ProductoEntity> {
  crearDto = ProductoCrearDto;
  editarDto = ProductoEditarDto;
  constructor(private readonly _productoService: ProductoService) {
    super(_productoService);
  }
}

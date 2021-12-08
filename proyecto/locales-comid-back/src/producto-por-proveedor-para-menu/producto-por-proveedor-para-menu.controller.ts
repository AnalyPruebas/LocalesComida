import { Controller } from '@nestjs/common';
import { ControladorPrincipal } from '../clases-genericas/controladorPrincipal';
import { ProductoPorProveedorParaMenuEntity } from './producto-por-proveedor-para-menu.entity';
import { ProductoPorProveedorParaMenuService } from './producto-por-proveedor-para-menu.service';
import { ProductoPorProveedorParaMenuCrearDto } from './producto-por-proveedor-para-menu-dto/producto-por-proveedor-para-menu-crear.dto';
import { ProductoPorProveedorParaMenuEditarDto } from './producto-por-proveedor-para-menu-dto/producto-por-proveedor-para-menu-editar.dto';

@Controller('producto-por-proveedor-para-menu')
export class ProductoPorProveedorParaMenuController extends ControladorPrincipal<
  ProductoPorProveedorParaMenuEntity
> {
  crearDto = ProductoPorProveedorParaMenuCrearDto;
  editarDto = ProductoPorProveedorParaMenuEditarDto;
  constructor(
    private readonly _productoPorProveedorParaMenuService: ProductoPorProveedorParaMenuService,
  ) {
    super(_productoPorProveedorParaMenuService);
  }
}

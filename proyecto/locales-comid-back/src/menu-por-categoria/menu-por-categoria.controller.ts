import {
  Controller,
  Get,
  InternalServerErrorException,
  Param,
  Query,
} from '@nestjs/common';
import { ControladorPrincipal } from '../clases-genericas/controladorPrincipal';
import { MenuPorCategoriaEntity } from './menu-por-categoria.entity';
import { MenuPorCategoriaService } from './menu-por-categoria.service';
import { MenuPorCategoriaCrearDto } from './menu-por-categoria-dto/menu-por-categoria-crear.dto';
import { MenuPorCategoriaEditarDto } from './menu-por-categoria-dto/menu-por-categoria-editar.dto';
import { PaginacionInterface } from '../interfaces/paginacion';

@Controller('menu-por-categoria')
export class MenuPorCategoriaController extends ControladorPrincipal<
  MenuPorCategoriaEntity
> {
  crearDto = MenuPorCategoriaCrearDto;
  editarDto = MenuPorCategoriaEditarDto;
  constructor(
    private readonly _menuPorCategoriaService: MenuPorCategoriaService,
  ) {
    super(_menuPorCategoriaService);
  }

  @Get('carrito/:idLugarComida')
  async buscarCarrito(
    @Query() paginacion: PaginacionInterface,
    @Param('idLugarComida') idLugarComida,
  ) {
    try {
      const skip = paginacion.skip;
      const take = paginacion.take;
      return await this._menuPorCategoriaService.listarCarrito(
        Number(skip),
        Number(take),
        idLugarComida,
      );
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
}

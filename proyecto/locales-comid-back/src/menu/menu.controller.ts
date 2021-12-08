import { Controller } from '@nestjs/common';
import { ControladorPrincipal } from '../clases-genericas/controladorPrincipal';
import { MenuEntity } from './menu.entity';
import { MenuService } from './menu.service';
import { MenuCrearDto } from './menu-dto/menu-crear.dto';
import { MenuEditarDto } from './menu-dto/menu-editar.dto';

@Controller('menu')
export class MenuController extends ControladorPrincipal<MenuEntity> {
  crearDto = MenuCrearDto;
  editarDto = MenuEditarDto;
  constructor(private readonly _menuService: MenuService) {
    super(_menuService);
  }
}

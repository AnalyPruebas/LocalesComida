import { Controller } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaCrearDto } from './categoria-dto/categoria-crear.dto';
import { CategoriaEditarDto } from './categoria-dto/categoria-editar.dto';
import { ControladorPrincipal } from '../clases-genericas/controladorPrincipal';
import { CategoriaEntity } from './categoria.entity';

@Controller('categoria')
export class CategoriaController extends ControladorPrincipal<CategoriaEntity> {
  crearDto = CategoriaCrearDto;
  editarDto = CategoriaEditarDto;
  constructor(private readonly _categoriaService: CategoriaService) {
    super(_categoriaService);
  }
}

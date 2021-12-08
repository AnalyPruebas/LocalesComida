import { Controller } from '@nestjs/common';
import { ControladorPrincipal } from '../clases-genericas/controladorPrincipal';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioService } from './usuario.service';
import { UsuarioCrearDto } from './usuario-dto/usuario-crear.dto';
import { UsuarioEditarDto } from './usuario-dto/usuario-editar.dto';

@Controller('usuario')
export class UsuarioController extends ControladorPrincipal<UsuarioEntity> {
  crearDto = UsuarioCrearDto;
  editarDto = UsuarioEditarDto;
  constructor(private readonly _usuarioService: UsuarioService) {
    super(_usuarioService);
  }
}

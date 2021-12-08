import { Controller } from '@nestjs/common';
import { ContactoLugarComidaEntity } from './contacto-lugar-comida.entity';
import { ControladorPrincipal } from '../clases-genericas/controladorPrincipal';
import { ContactoLugarComidaService } from './contacto-lugar-comida.service';
import { ContactoLugarComidaCrearDto } from './contacto-lugar-comida-dto/contacto-lugar-comida-crear.dto';
import { ContactoLugarComidaEditarDto } from './contacto-lugar-comida-dto/contacto-lugar-comida-editar.dto';
@Controller('contacto-lugar-comida')
export class ContactoLugarComidaController extends ControladorPrincipal<
  ContactoLugarComidaEntity
> {
  crearDto = ContactoLugarComidaCrearDto;
  editarDto = ContactoLugarComidaEditarDto;
  constructor(
    private readonly _contactoLugarComidaService: ContactoLugarComidaService,
  ) {
    super(_contactoLugarComidaService);
  }
}

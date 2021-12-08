import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactoLugarComidaEntity } from './contacto-lugar-comida.entity';
import { ServicioPrincipal } from '../clases-genericas/servicioPrincipal';

@Injectable()
export class ContactoLugarComidaService extends ServicioPrincipal<
  ContactoLugarComidaEntity
> {
  constructor(
    @InjectRepository(ContactoLugarComidaEntity)
    private readonly _contactoLugarComidaRepository: Repository<
      ContactoLugarComidaEntity
    >,
  ) {
    super(_contactoLugarComidaRepository);
  }
}

import { Injectable } from '@nestjs/common';
import { ServicioPrincipal } from '../clases-genericas/servicioPrincipal';
import { RolPorUsuarioEntity } from './rol-por-usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RolPorUsuarioService extends ServicioPrincipal<
  RolPorUsuarioEntity
> {
  constructor(
    @InjectRepository(RolPorUsuarioEntity)
    private readonly _rolPorUsuarioRepository: Repository<RolPorUsuarioEntity>,
  ) {
    super(_rolPorUsuarioRepository);
  }
}

import { Injectable } from '@nestjs/common';
import { ServicioPrincipal } from '../clases-genericas/servicioPrincipal';
import { LugarComidaEntity } from './lugar-comida.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LugarComidaService extends ServicioPrincipal<LugarComidaEntity> {
  constructor(
    @InjectRepository(LugarComidaEntity)
    private readonly _lugarComidaRepository: Repository<LugarComidaEntity>,
  ) {
    super(_lugarComidaRepository);
  }
}

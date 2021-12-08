import { Injectable } from '@nestjs/common';
import { ServicioPrincipal } from '../clases-genericas/servicioPrincipal';
import { LugarEntity } from './lugar.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LugarService extends ServicioPrincipal<LugarEntity> {
  constructor(
    @InjectRepository(LugarEntity)
    private readonly _lugarRepository: Repository<LugarEntity>,
  ) {
    super(_lugarRepository);
  }
}

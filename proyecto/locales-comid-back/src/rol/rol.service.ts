import { Injectable } from '@nestjs/common';
import { ServicioPrincipal } from '../clases-genericas/servicioPrincipal';
import { RolEntity } from './rol.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RolService extends ServicioPrincipal<RolEntity> {
  constructor(
    @InjectRepository(RolEntity)
    private readonly _rolRepository: Repository<RolEntity>,
  ) {
    super(_rolRepository);
  }
}

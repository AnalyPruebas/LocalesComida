import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmpleadoPorLugarComidaEntity } from './empleado-por-lugar-comida.entity';
import { ServicioPrincipal } from '../clases-genericas/servicioPrincipal';
import { Repository } from 'typeorm';

@Injectable()
export class EmpleadoPorLugarComidaService extends ServicioPrincipal<
  EmpleadoPorLugarComidaEntity
> {
  constructor(
    @InjectRepository(EmpleadoPorLugarComidaEntity)
    private readonly _empleadoPorLugarComidaRepository: Repository<
      EmpleadoPorLugarComidaEntity
    >,
  ) {
    super(_empleadoPorLugarComidaRepository);
  }
}

import { Injectable } from '@nestjs/common';
import { ServicioPrincipal } from '../clases-genericas/servicioPrincipal';
import { EmpleadoEntity } from './empleado.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmpleadoService extends ServicioPrincipal<EmpleadoEntity> {
  constructor(
    @InjectRepository(EmpleadoEntity)
    private readonly _empleadoRepository: Repository<EmpleadoEntity>,
  ) {
    super(_empleadoRepository);
  }
}

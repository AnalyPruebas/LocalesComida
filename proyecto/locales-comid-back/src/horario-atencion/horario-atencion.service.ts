import { Injectable } from '@nestjs/common';
import { ServicioPrincipal } from '../clases-genericas/servicioPrincipal';
import { HorarioAtencionEntity } from './horario-atencion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HorarioAtencionService extends ServicioPrincipal<
  HorarioAtencionEntity
> {
  constructor(
    @InjectRepository(HorarioAtencionEntity)
    private readonly _horarioAtencionRepository: Repository<
      HorarioAtencionEntity
    >,
  ) {
    super(_horarioAtencionRepository);
  }
}

import { Injectable } from '@nestjs/common';
import { ServicioPrincipal } from '../clases-genericas/servicioPrincipal';
import { ReservaEntity } from './reserva.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ReservaService extends ServicioPrincipal<ReservaEntity> {
  constructor(
    @InjectRepository(ReservaEntity)
    private readonly _reservaRepository: Repository<ReservaEntity>,
  ) {
    super(_reservaRepository);
  }
}

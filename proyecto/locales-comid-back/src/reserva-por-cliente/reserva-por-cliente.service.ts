import { Injectable } from '@nestjs/common';
import { ServicioPrincipal } from '../clases-genericas/servicioPrincipal';
import { ReservaPorClienteEntity } from './reserva-por-cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ReservaPorClienteService extends ServicioPrincipal<
  ReservaPorClienteEntity
> {
  constructor(
    @InjectRepository(ReservaPorClienteEntity)
    private readonly _reservaPorClienteRepository: Repository<
      ReservaPorClienteEntity
    >,
  ) {
    super(_reservaPorClienteRepository);
  }
}

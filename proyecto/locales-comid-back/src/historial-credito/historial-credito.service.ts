import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HistorialCreditoEntity } from './historial-credito.entity';
import { ServicioPrincipal } from '../clases-genericas/servicioPrincipal';

@Injectable()
export class HistorialCreditoService extends ServicioPrincipal<
  HistorialCreditoEntity
> {
  constructor(
    @InjectRepository(HistorialCreditoEntity)
    private readonly _historialCreditoRepository: Repository<
      HistorialCreditoEntity
    >,
  ) {
    super(_historialCreditoRepository);
  }
}

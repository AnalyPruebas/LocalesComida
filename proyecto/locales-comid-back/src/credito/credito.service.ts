import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreditoEntity } from './credito.entity';
import { Repository } from 'typeorm';
import { ServicioPrincipal } from '../clases-genericas/servicioPrincipal';

@Injectable()
export class CreditoService extends ServicioPrincipal<CreditoEntity> {
  constructor(
    @InjectRepository(CreditoEntity)
    private readonly _creditoRepository: Repository<CreditoEntity>,
  ) {
    super(_creditoRepository);
  }
}

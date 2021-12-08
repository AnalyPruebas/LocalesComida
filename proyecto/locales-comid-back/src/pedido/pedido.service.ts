import { Injectable } from '@nestjs/common';
import { ServicioPrincipal } from '../clases-genericas/servicioPrincipal';
import { PedidoEntity } from './pedido.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PedidoService extends ServicioPrincipal<PedidoEntity> {
  constructor(
    @InjectRepository(PedidoEntity)
    private readonly _pedidoRepository: Repository<PedidoEntity>,
  ) {
    super(_pedidoRepository);
  }
}

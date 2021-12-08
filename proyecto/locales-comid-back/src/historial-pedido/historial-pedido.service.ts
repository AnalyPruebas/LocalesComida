import { Injectable } from '@nestjs/common';
import { ServicioPrincipal } from '../clases-genericas/servicioPrincipal';
import { HistorialPedidoEntity } from './historial-pedido.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HistorialPedidoService extends ServicioPrincipal<
  HistorialPedidoEntity
> {
  constructor(
    @InjectRepository(HistorialPedidoEntity)
    private readonly _historialPedidoRepository: Repository<
      HistorialPedidoEntity
    >,
  ) {
    super(_historialPedidoRepository);
  }
}

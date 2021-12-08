import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { PedidoEntity } from '../pedido/pedido.entity';
import { HistorialCreditoEntity } from '../historial-credito/historial-credito.entity';

@Entity('historial-pedido')
export class HistorialPedidoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => PedidoEntity, pedido => pedido.historialesPedido)
  pedido: number | PedidoEntity;

  @ManyToOne(
    type => HistorialCreditoEntity,
    historialCredito => historialCredito.historialesPedido,
  )
  historialCredito: number | HistorialCreditoEntity;
}

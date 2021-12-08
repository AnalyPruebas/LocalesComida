import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { CreditoEntity } from '../credito/credito.entity';
import { HistorialPedidoEntity } from '../historial-pedido/historial-pedido.entity';

@Entity('historial-credito')
export class HistorialCreditoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'aumento',
    type: 'tinyint',
  })
  aumento: boolean;

  @Column({
    name: 'monto',
    type: 'decimal',
    scale: 4,
    precision: 10,
  })
  monto: number = null;

  @ManyToOne(type => UsuarioEntity, usuario => usuario.historialesCredito)
  usuario: number | UsuarioEntity;

  @ManyToOne(type => CreditoEntity, credito => credito.historialesCredito)
  credito: number | CreditoEntity;

  @OneToMany(
    type => HistorialPedidoEntity,
    historialPedido => historialPedido.historialCredito,
  )
  historialesPedido: HistorialPedidoEntity[];
}

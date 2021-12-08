import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ReservaEntity } from '../reserva/reserva.entity';
import { LugarComidaEntity } from '../lugar-comida/lugar-comida.entity';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { PedidoEntity } from '../pedido/pedido.entity';
import { ESTADO_RESERVA } from '../constantes/enums';

@Entity('reserva-por-cliente')
export class ReservaPorClienteEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'personas',
    type: 'int',
  })
  personas: number = null;

  @Column({
    name: 'estado',
    type: 'varchar',
  })
  estado: ESTADO_RESERVA = null;

  @ManyToOne(type => ReservaEntity, reserva => reserva.reservasPorCliente)
  reserva: ReservaEntity | number;

  @ManyToOne(
    type => LugarComidaEntity,
    lugarComida => lugarComida.reservasPorCliente,
  )
  lugarComida: LugarComidaEntity | number;

  @ManyToOne(type => UsuarioEntity, usuario => usuario.reservasPorCliente)
  usuario: number | UsuarioEntity;

  @OneToMany(type => PedidoEntity, pedido => pedido.reservaCliente)
  pedidos: PedidoEntity[];
}

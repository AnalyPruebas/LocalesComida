import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { MenuPorCategoriaEntity } from '../menu-por-categoria/menu-por-categoria.entity';
import { ReservaPorClienteEntity } from '../reserva-por-cliente/reserva-por-cliente.entity';
import { HistorialPedidoEntity } from '../historial-pedido/historial-pedido.entity';
import { UsuarioEntity } from '../usuario/usuario.entity';

@Entity('pedido')
export class PedidoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'cantidad',
    type: 'int',
  })
  cantidad: number;

  @Column({
    name: 'precio_total',
    type: 'decimal',
    scale: 4,
    precision: 10,
  })
  precioTotal: number;

  @ManyToOne(
    type => MenuPorCategoriaEntity,
    menuCategoria => menuCategoria.pedidos,
  )
  menuCategoria: number | MenuPorCategoriaEntity;

  @ManyToOne(
    type => ReservaPorClienteEntity,
    reservaCliente => reservaCliente.pedidos,
  )
  reservaCliente: number | ReservaPorClienteEntity;

  @ManyToOne(type => UsuarioEntity, usuario => usuario.pedidos)
  usuario: UsuarioEntity | number;

  @OneToMany(
    type => HistorialPedidoEntity,
    historialPedido => historialPedido.pedido,
  )
  historialesPedido: HistorialPedidoEntity[];
}

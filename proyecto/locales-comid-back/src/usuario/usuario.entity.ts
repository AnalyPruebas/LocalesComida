import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RolPorUsuarioEntity } from '../rol-por-usuario/rol-por-usuario.entity';
import { ReservaPorClienteEntity } from '../reserva-por-cliente/reserva-por-cliente.entity';
import { HistorialCreditoEntity } from '../historial-credito/historial-credito.entity';
import { PedidoEntity } from '../pedido/pedido.entity';

@Entity('usuario')
export class UsuarioEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'nombre',
    type: 'varchar',
    length: 30,
  })
  nombre: string = null;

  @Column({
    name: 'apellido',
    type: 'varchar',
    length: 30,
  })
  apellido: string = null;

  @Column({
    name: 'correo',
    type: 'varchar',
    length: 75,
  })
  correo: string = null;

  @Column({
    name: 'direccion',
    type: 'varchar',
    length: 75,
  })
  direccion: string = null;

  @Column({
    name: 'celular',
    type: 'varchar',
    length: 10,
  })
  celular: string = null;

  @OneToMany(type => RolPorUsuarioEntity, rolUsuario => rolUsuario.usuario)
  rolesPorUsuario: RolPorUsuarioEntity[];

  @OneToMany(
    type => ReservaPorClienteEntity,
    reservaCliente => reservaCliente.usuario,
  )
  reservasPorCliente: ReservaPorClienteEntity[];

  @OneToMany(type => PedidoEntity, pedido => pedido.usuario)
  pedidos: PedidoEntity[];

  @OneToMany(
    type => HistorialCreditoEntity,
    historialCredito => historialCredito.usuario,
  )
  historialesCredito: HistorialCreditoEntity[];
}

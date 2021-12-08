import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { LugarComidaEntity } from '../lugar-comida/lugar-comida.entity';
import { ReservaPorClienteEntity } from '../reserva-por-cliente/reserva-por-cliente.entity';

@Entity('reserva')
export class ReservaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'nombre',
    type: 'varchar',
  })
  nombre: string = null;

  @Column({
    name: 'hora_inicio',
    type: 'varchar',
  })
  horaInicio: string = null;

  @Column({
    name: 'hora_fin',
    type: 'varchar',
  })
  horaFin: string = null;

  @Column({
    name: 'habilitado',
    type: 'tinyint',
  })
  habilitado: boolean;

  @ManyToOne(type => LugarComidaEntity, lugarComida => lugarComida.reservas)
  lugarComida: number | LugarComidaEntity;

  @OneToMany(
    type => ReservaPorClienteEntity,
    reservaCliente => reservaCliente.reserva,
  )
  reservasPorCliente: ReservaPorClienteEntity[];
}

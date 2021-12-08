import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { EmpleadoEntity } from '../empleado/empleado.entity';
import { LugarComidaEntity } from '../lugar-comida/lugar-comida.entity';

@Entity('empleado-por-lugar-comida')
export class EmpleadoPorLugarComidaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'habilitado',
    type: 'tinyint',
  })
  habilitado: boolean;

  @ManyToOne(
    type => EmpleadoEntity,
    empleado => empleado.empleadosPorLugarComida,
  )
  empleado: number | EmpleadoEntity;

  @ManyToOne(
    type => LugarComidaEntity,
    lugarComida => lugarComida.empleadosPorLugarComida,
  )
  lugarComida: number | LugarComidaEntity;
}

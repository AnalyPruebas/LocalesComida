import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { EmpleadoPorLugarComidaEntity } from '../empleado-por-lugar-comida/empleado-por-lugar-comida.entity';

@Entity('empleado')
export class EmpleadoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'nombre',
    type: 'varchar',
    length: 60,
  })
  nombre: string = null;

  @Column({
    name: 'identificacion',
    type: 'varchar',
    length: 10,
  })
  identificacion: string = null;

  @OneToMany(
    type => EmpleadoPorLugarComidaEntity,
    empleadoLugarComida => empleadoLugarComida.empleado,
  )
  empleadosPorLugarComida: EmpleadoPorLugarComidaEntity[];
}

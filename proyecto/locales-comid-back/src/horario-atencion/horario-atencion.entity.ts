import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { LugarComidaEntity } from '../lugar-comida/lugar-comida.entity';

@Entity('horario-atencion')
export class HorarioAtencionEntity {
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
  habilitado: string = null;

  @ManyToOne(
    type => LugarComidaEntity,
    lugarComida => lugarComida.horariosAtencion,
  )
  lugarComida: number | LugarComidaEntity;
}

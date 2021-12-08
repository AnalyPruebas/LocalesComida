import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { LugarComidaEntity } from '../lugar-comida/lugar-comida.entity';

@Entity('lugar')
export class LugarEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'nombre',
    type: 'varchar',
  })
  nombre: string = null;

  @OneToMany(type => LugarComidaEntity, lugarComida => lugarComida.lugar)
  lugaresComida: LugarComidaEntity[];
}

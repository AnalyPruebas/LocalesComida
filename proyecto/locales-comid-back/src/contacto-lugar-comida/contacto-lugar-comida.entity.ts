import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { LugarComidaEntity } from '../lugar-comida/lugar-comida.entity';

@Entity('contacto-lugar-comida')
export class ContactoLugarComidaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'nombre',
    type: 'varchar',
  })
  nombre: string = null;
  // telefono celular email
  @Column({
    name: 'telefono',
    type: 'varchar',
    length: 9,
  })
  telefono: string = null;

  @Column({
    name: 'celular',
    type: 'varchar',
    length: 10,
  })
  celular: string = null;

  @Column({
    name: 'email',
    type: 'varchar',
    nullable: true,
  })
  email: string = null;

  @ManyToOne(
    type => LugarComidaEntity,
    lugarComida => lugarComida.contactosLugarComida,
  )
  lugarComida: number | LugarComidaEntity;
}

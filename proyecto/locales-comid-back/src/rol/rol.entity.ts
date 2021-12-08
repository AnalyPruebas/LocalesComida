import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RolPorUsuarioEntity } from '../rol-por-usuario/rol-por-usuario.entity';

@Entity('rol')
export class RolEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'nombre',
    type: 'varchar',
  })
  nombre: string = null;

  @OneToMany(type => RolPorUsuarioEntity, rolUsuario => rolUsuario.rol)
  rolesPorUsuario: RolPorUsuarioEntity[];
}

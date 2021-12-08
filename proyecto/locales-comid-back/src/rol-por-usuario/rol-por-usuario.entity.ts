import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { RolEntity } from '../rol/rol.entity';
import { UsuarioEntity } from '../usuario/usuario.entity';

@Entity('rol-por-usuario')
export class RolPorUsuarioEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => RolEntity, rol => rol.rolesPorUsuario)
  rol: number | RolEntity;

  @ManyToOne(type => UsuarioEntity, usuario => usuario.rolesPorUsuario)
  usuario: number | UsuarioEntity;
}

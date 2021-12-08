import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { MenuPorCategoriaEntity } from '../menu-por-categoria/menu-por-categoria.entity';

@Entity('categoria')
export class CategoriaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'nombre',
    type: 'varchar',
  })
  nombre: string = null;

  @Column({
    name: 'habilitado',
    type: 'boolean',
  })
  habilitado: boolean = null;

  @OneToMany(
    type => MenuPorCategoriaEntity,
    menuCategoria => menuCategoria.categoria,
  )
  menusCategoria: MenuPorCategoriaEntity[];
}

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { MenuPorCategoriaEntity } from '../menu-por-categoria/menu-por-categoria.entity';

@Entity('menu')
export class MenuEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'nombre',
    type: 'varchar',
  })
  nombre: string = null;

  @OneToMany(
    type => MenuPorCategoriaEntity,
    menuCategoria => menuCategoria.menu,
  )
  menusCategoria: MenuPorCategoriaEntity[];
}

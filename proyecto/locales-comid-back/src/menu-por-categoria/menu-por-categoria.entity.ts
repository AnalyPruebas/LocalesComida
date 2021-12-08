import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { PedidoEntity } from '../pedido/pedido.entity';
import { MenuEntity } from '../menu/menu.entity';
import { CategoriaEntity } from '../categoria/categoria.entity';
import { ProductoPorProveedorParaMenuEntity } from '../producto-por-proveedor-para-menu/producto-por-proveedor-para-menu.entity';
import { LugarComidaEntity } from '../lugar-comida/lugar-comida.entity';

@Entity('menu-por-categoria')
export class MenuPorCategoriaEntity {
  // nombre cant precio_uni
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'nombre',
    type: 'varchar',
  })
  nombre: string = null;

  @Column({
    name: 'precio_unitario',
    type: 'decimal',
    scale: 4,
    precision: 10,
  })
  precioUnitario: number;

  @ManyToOne(type => MenuEntity, menu => menu.menusCategoria)
  menu: number | MenuEntity;

  @ManyToOne(type => CategoriaEntity, categoria => categoria.menusCategoria)
  categoria: number | CategoriaEntity;

  @ManyToOne(
    type => LugarComidaEntity,
    lugarComida => lugarComida.menusPorCategoria,
  )
  lugarComida: number | LugarComidaEntity;

  @OneToMany(type => PedidoEntity, pedido => pedido.menuCategoria)
  pedidos: PedidoEntity[];

  @OneToMany(
    type => ProductoPorProveedorParaMenuEntity,
    productoProveedorPAraMenu => productoProveedorPAraMenu.menuCategoria,
  )
  productosPorProveedorParaMenu: ProductoPorProveedorParaMenuEntity[];
}

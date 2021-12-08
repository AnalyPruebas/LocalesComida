import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ProductoEntity } from '../producto/producto.entity';
import { MenuPorCategoriaEntity } from '../menu-por-categoria/menu-por-categoria.entity';
import { ProveedorEntity } from '../proveedor/proveedor.entity';

@Entity('producto-proveedor-para-menu')
export class ProductoPorProveedorParaMenuEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'cantidad',
    type: 'int',
  })
  cantidad: number;
  @ManyToOne(
    type => ProductoEntity,
    producto => producto.productosPorProveedorParaMenu,
  )
  producto: ProductoEntity;

  @ManyToOne(
    type => MenuPorCategoriaEntity,
    menuCategoria => menuCategoria.productosPorProveedorParaMenu,
  )
  menuCategoria: number | MenuPorCategoriaEntity;

  @ManyToOne(
    type => ProveedorEntity,
    proveedor => proveedor.productosPorProveedorParaMenu,
  )
  proveedor: number | ProveedorEntity;
}

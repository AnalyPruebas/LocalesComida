import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ProductoEntity } from '../producto/producto.entity';
import { ProductoPorProveedorParaMenuEntity } from '../producto-por-proveedor-para-menu/producto-por-proveedor-para-menu.entity';

@Entity('proveedor')
export class ProveedorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'nombre',
    type: 'varchar',
  })
  nombre: string = null;

  @OneToMany(type => ProductoEntity, producto => producto.proveedor)
  productos: ProductoEntity[];

  @OneToMany(
    type => ProductoPorProveedorParaMenuEntity,
    productoProveedorMenu => productoProveedorMenu.proveedor,
  )
  productosPorProveedorParaMenu: ProductoPorProveedorParaMenuEntity[];
}

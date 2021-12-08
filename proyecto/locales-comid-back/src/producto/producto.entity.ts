import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ProductoPorProveedorParaMenuEntity } from '../producto-por-proveedor-para-menu/producto-por-proveedor-para-menu.entity';
import { ProveedorEntity } from '../proveedor/proveedor.entity';

@Entity('producto')
export class ProductoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'nombre',
    type: 'varchar',
  })
  nombre: string = null;

  @Column({
    name: 'cantidad',
    type: 'int',
  })
  cantidad: number = null;

  @Column({
    name: 'precio_unitario',
    type: 'decimal',
    scale: 4,
    precision: 10,
  })
  precioUnitario: number = null;

  @ManyToOne(type => ProveedorEntity, proveedor => proveedor.productos)
  proveedor: number | ProveedorEntity;

  @OneToMany(
    type => ProductoPorProveedorParaMenuEntity,
    productoProveedorMenu => productoProveedorMenu.producto,
  )
  productosPorProveedorParaMenu: ProductoPorProveedorParaMenuEntity[];
}

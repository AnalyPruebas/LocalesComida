import { Injectable } from '@nestjs/common';
import { Connection, EntitySubscriberInterface, InsertEvent } from 'typeorm';
import { PedidoEntity } from './pedido.entity';
import { InjectConnection } from '@nestjs/typeorm';
import { ProductoPorProveedorParaMenuService } from '../producto-por-proveedor-para-menu/producto-por-proveedor-para-menu.service';
import { ProductoEntity } from '../producto/producto.entity';

@Injectable()
export class PedidoSubscriber implements EntitySubscriberInterface<PedidoEntity> {
  constructor(
    @InjectConnection() readonly connection: Connection,
    private readonly _productoPorProveedorParaMenu: ProductoPorProveedorParaMenuService,
    // private readonly _productoService: Produ
  ) {
    connection.subscribers.push(this);
  }
  listenTo() {
    return PedidoEntity;
  }
  async afterInsert( evento: InsertEvent<PedidoEntity>) {
    console.log('se llego al after', evento.entity);
    const productosPorProveedorParaMenu = await this._productoPorProveedorParaMenu.buscarPorParametros({
      where: {
        menuCategoria: evento.entity.menuCategoria
      },
      relations: ['producto']
    });
    console.log('prod', productosPorProveedorParaMenu[0][0].producto);
    for (const productoProveedorMenu of productosPorProveedorParaMenu[0]) {
      const cantidadNueva = Number(productoProveedorMenu.producto.cantidad) - Number(productoProveedorMenu.cantidad);
      await evento.manager.getRepository(ProductoEntity)
        .update(productoProveedorMenu.producto.id, {cantidad: cantidadNueva});
    }
  }
}

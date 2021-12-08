import { Module } from '@nestjs/common';
import { PedidoController } from './pedido.controller';
import { PedidoService } from './pedido.service';
import { PedidoEntity } from './pedido.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoSubscriber } from './pedido.subscriber';
import { ProductoPorProveedorParaMenuService } from '../producto-por-proveedor-para-menu/producto-por-proveedor-para-menu.service';
import { ProductoPorProveedorParaMenuModule } from '../producto-por-proveedor-para-menu/producto-por-proveedor-para-menu.module';

@Module({
  imports: [TypeOrmModule.forFeature([PedidoEntity]), ProductoPorProveedorParaMenuModule],
  controllers: [PedidoController],
  providers: [PedidoService, PedidoSubscriber],
  exports: [PedidoService],
})
export class PedidoModule {}

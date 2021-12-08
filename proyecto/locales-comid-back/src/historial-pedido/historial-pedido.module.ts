import { Module } from '@nestjs/common';
import { HistorialPedidoController } from './historial-pedido.controller';
import { HistorialPedidoService } from './historial-pedido.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistorialPedidoEntity } from './historial-pedido.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HistorialPedidoEntity])],
  controllers: [HistorialPedidoController],
  providers: [HistorialPedidoService],
  exports: [HistorialPedidoService],
})
export class HistorialPedidoModule {}

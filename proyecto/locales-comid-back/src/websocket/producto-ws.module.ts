import { Module } from '@nestjs/common';
import { ProductoWsGateway } from './producto-ws.gateway';

@Module({
  providers: [ProductoWsGateway],
  exports: [ProductoWsGateway],
})
export class ProductoWsModule {}

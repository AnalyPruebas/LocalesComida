import { Module } from '@nestjs/common';
import { ReservaPorClienteController } from './reserva-por-cliente.controller';
import { ReservaPorClienteService } from './reserva-por-cliente.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservaPorClienteEntity } from './reserva-por-cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReservaPorClienteEntity])],
  controllers: [ReservaPorClienteController],
  providers: [ReservaPorClienteService],
  exports: [ReservaPorClienteService],
})
export class ReservaPorClienteModule {}

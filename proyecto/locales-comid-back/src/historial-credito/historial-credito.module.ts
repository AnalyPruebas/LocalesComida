import { Module } from '@nestjs/common';
import { HistorialCreditoController } from './historial-credito.controller';
import { HistorialCreditoService } from './historial-credito.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistorialCreditoEntity } from './historial-credito.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HistorialCreditoEntity])],
  controllers: [HistorialCreditoController],
  providers: [HistorialCreditoService],
  exports: [HistorialCreditoService],
})
export class HistorialCreditoModule {}

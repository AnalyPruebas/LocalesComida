import { Module } from '@nestjs/common';
import { CreditoController } from './credito.controller';
import { CreditoService } from './credito.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreditoEntity } from './credito.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CreditoEntity])],
  controllers: [CreditoController],
  providers: [CreditoService],
  exports: [CreditoService],
})
export class CreditoModule {}

import { Module } from '@nestjs/common';
import { LugarComidaController } from './lugar-comida.controller';
import { LugarComidaService } from './lugar-comida.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LugarComidaEntity } from './lugar-comida.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LugarComidaEntity])],
  controllers: [LugarComidaController],
  providers: [LugarComidaService],
  exports: [LugarComidaService],
})
export class LugarComidaModule {}

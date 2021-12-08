import { Module } from '@nestjs/common';
import { EmpleadoPorLugarComidaController } from './empleado-por-lugar-comida.controller';
import { EmpleadoPorLugarComidaService } from './empleado-por-lugar-comida.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpleadoPorLugarComidaEntity } from './empleado-por-lugar-comida.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmpleadoPorLugarComidaEntity])],
  controllers: [EmpleadoPorLugarComidaController],
  providers: [EmpleadoPorLugarComidaService],
  exports: [EmpleadoPorLugarComidaService],
})
export class EmpleadoPorLugarComidaModule {}

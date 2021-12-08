import { Module } from '@nestjs/common';
import { HorarioAtencionController } from './horario-atencion.controller';
import { HorarioAtencionService } from './horario-atencion.service';
import { HorarioAtencionEntity } from './horario-atencion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([HorarioAtencionEntity])],
  controllers: [HorarioAtencionController],
  providers: [HorarioAtencionService],
  exports: [HorarioAtencionService],
})
export class HorarioAtencionModule {}

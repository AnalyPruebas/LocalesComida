import { Module } from '@nestjs/common';
import { ContactoLugarComidaController } from './contacto-lugar-comida.controller';
import { ContactoLugarComidaService } from './contacto-lugar-comida.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactoLugarComidaEntity } from './contacto-lugar-comida.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContactoLugarComidaEntity])],
  controllers: [ContactoLugarComidaController],
  providers: [ContactoLugarComidaService],
  exports: [ContactoLugarComidaService],
})
export class ContactoLugarComidaModule {}

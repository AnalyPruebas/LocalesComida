import { Module } from '@nestjs/common';
import { MenuPorCategoriaController } from './menu-por-categoria.controller';
import { MenuPorCategoriaService } from './menu-por-categoria.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuPorCategoriaEntity } from './menu-por-categoria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MenuPorCategoriaEntity])],
  controllers: [MenuPorCategoriaController],
  providers: [MenuPorCategoriaService],
  exports: [MenuPorCategoriaService],
})
export class MenuPorCategoriaModule {}

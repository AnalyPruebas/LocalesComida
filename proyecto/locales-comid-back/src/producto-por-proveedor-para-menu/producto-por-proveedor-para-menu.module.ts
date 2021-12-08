import { Module } from '@nestjs/common';
import { ProductoPorProveedorParaMenuController } from './producto-por-proveedor-para-menu.controller';
import { ProductoPorProveedorParaMenuService } from './producto-por-proveedor-para-menu.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoPorProveedorParaMenuEntity } from './producto-por-proveedor-para-menu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductoPorProveedorParaMenuEntity])],
  controllers: [ProductoPorProveedorParaMenuController],
  providers: [ProductoPorProveedorParaMenuService],
  exports: [ProductoPorProveedorParaMenuService],
})
export class ProductoPorProveedorParaMenuModule {}

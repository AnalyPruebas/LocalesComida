import { Injectable } from '@nestjs/common';
import { ServicioPrincipal } from '../clases-genericas/servicioPrincipal';
import { ProductoPorProveedorParaMenuEntity } from './producto-por-proveedor-para-menu.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductoPorProveedorParaMenuService extends ServicioPrincipal<
  ProductoPorProveedorParaMenuEntity
> {
  constructor(
    @InjectRepository(ProductoPorProveedorParaMenuEntity)
    private readonly _productoPorProveedorParaMenuRepository: Repository<
      ProductoPorProveedorParaMenuEntity
    >,
  ) {
    super(_productoPorProveedorParaMenuRepository);
  }
}

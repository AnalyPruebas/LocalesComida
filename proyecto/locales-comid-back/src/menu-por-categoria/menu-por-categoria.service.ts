import { Injectable } from '@nestjs/common';
import { ServicioPrincipal } from '../clases-genericas/servicioPrincipal';
import { MenuPorCategoriaEntity } from './menu-por-categoria.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MenuPorCategoriaService extends ServicioPrincipal<
  MenuPorCategoriaEntity
> {
  constructor(
    @InjectRepository(MenuPorCategoriaEntity)
    private readonly _menuPorCategoriaRepository: Repository<
      MenuPorCategoriaEntity
    >,
  ) {
    super(_menuPorCategoriaRepository);
  }
  async listarCarrito(nSkip, nTake, idLocalComida) {
    return this._menuPorCategoriaRepository.findAndCount({
      relations: [
        'categoria',
        'menu',
        'productosPorProveedorParaMenu',
        'productosPorProveedorParaMenu.producto',
      ],
      where: { lugarComida: idLocalComida },
      take: nTake,
      skip: nSkip,
      order: {
        id: 'DESC',
      },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { ServicioPrincipal } from '../clases-genericas/servicioPrincipal';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MenuEntity } from './menu.entity';

@Injectable()
export class MenuService extends ServicioPrincipal<MenuEntity> {
  constructor(
    @InjectRepository(MenuEntity)
    private readonly _menuRepository: Repository<MenuEntity>,
  ) {
    super(_menuRepository);
  }
}

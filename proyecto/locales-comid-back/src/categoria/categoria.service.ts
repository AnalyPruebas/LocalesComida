import { Injectable } from '@nestjs/common';
import { CategoriaEntity } from './categoria.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServicioPrincipal } from '../clases-genericas/servicioPrincipal';

@Injectable()
export class CategoriaService extends ServicioPrincipal<CategoriaEntity> {
  constructor(
    @InjectRepository(CategoriaEntity)
    private readonly _categoriaRepository: Repository<CategoriaEntity>,
  ) {
    super(_categoriaRepository);
  }
}

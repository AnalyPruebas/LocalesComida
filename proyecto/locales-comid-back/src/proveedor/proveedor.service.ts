import { Injectable } from '@nestjs/common';
import { ServicioPrincipal } from '../clases-genericas/servicioPrincipal';
import { ProveedorEntity } from './proveedor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProveedorService extends ServicioPrincipal<ProveedorEntity> {
  constructor(
    @InjectRepository(ProveedorEntity)
    private readonly _proveedorRepository: Repository<ProveedorEntity>,
  ) {
    super(_proveedorRepository);
  }
}

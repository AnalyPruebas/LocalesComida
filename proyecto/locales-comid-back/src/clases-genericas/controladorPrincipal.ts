import {
  BadRequestException,
  Body,
  Delete,
  Get,
  InternalServerErrorException,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ServicioPrincipal } from './servicioPrincipal';
import { validarDto } from '../funciones/validar-dto';
import { PaginacionInterface } from '../interfaces/paginacion';
import { JoinColumn } from 'typeorm';

export class ControladorPrincipal<Entidad> {
  editarDto;
  crearDto;

  constructor(private readonly _principalService: ServicioPrincipal<Entidad>) {}
  @Post('crear-varios')
  async crearVarios(@Body() datosAguardar: Entidad[]) {
    const crearValido = new this.crearDto();
    const errorValidacion = await validarDto(datosAguardar[0], crearValido);
    if (errorValidacion.length > 0) {
      throw new BadRequestException({
        mensaje: errorValidacion,
        error: 'Datos erroneos',
      });
    } else {
      try {
        return await this._principalService.crearVarios(datosAguardar);
      } catch (e) {
        throw new InternalServerErrorException(e);
      }
    }
  }
  @Post()
  async crear(@Body() datosAguardar: Entidad) {
    const crearValido = new this.crearDto();
    const errorValidacion = await validarDto(datosAguardar, crearValido);
    if (errorValidacion.length > 0) {
      throw new BadRequestException({
        mensaje: errorValidacion,
        error: 'Datos erroneos',
      });
    } else {
      try {
        return await this._principalService.crear(datosAguardar);
      } catch (e) {
        throw new InternalServerErrorException(e);
      }
    }
  }

  @Put(':id')
  async editar(@Body() datosActualizar: Entidad, @Param('id') id: number) {
    const aulaValido = new this.editarDto();
    const erroresValidacion = await validarDto(datosActualizar, aulaValido);
    if (erroresValidacion.length > 0) {
      throw new BadRequestException({
        mensaje: erroresValidacion,
        error: 'Datos erroneos',
      });
    } else {
      try {
        return await this._principalService.editar(Number(id), datosActualizar);
      } catch (e) {
        throw new InternalServerErrorException(e);
      }
    }
  }

  @Delete(':id')
  async eliminar(@Param('id') id: number) {
    try {
      return await this._principalService.eliminar(Number(id));
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  @Get('query?')
  async buscarPorParametros(@Query('criterioBusqueda') criterioBusqueda) {
    try {
      // const skip = criterioBusqueda.skip;
      // const take = criterioBusqueda.take;
      console.log('cb', criterioBusqueda);
      const resultado = await this._principalService.buscarPorParametros(
        JSON.parse(criterioBusqueda),
      );
      console.log('res', resultado);
      return resultado;
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
  @Get('/:id')
  async buscarPorId(@Param('id') id, @Query() paginacion: PaginacionInterface) {
    try {
      const skip = paginacion.skip;
      const take = paginacion.take;
      return await this._principalService.buscarPorId(
        Number(id),
        Number(skip),
        Number(take),
      );
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  @Get()
  async buscarTodos(@Query() paginacion: PaginacionInterface) {
    try {
      const skip = paginacion.skip;
      const take = paginacion.take;
      return await this._principalService.listar(Number(skip), Number(take));
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
}

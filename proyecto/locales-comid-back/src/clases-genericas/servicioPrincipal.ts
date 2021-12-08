import { FindManyOptions, Repository, UpdateResult } from 'typeorm';

export class ServicioPrincipal<Entidad> {
  constructor(private readonly _entityRepository: Repository<Entidad>) {}

  async crear(nuevo: Entidad): Promise<Entidad> {
    return this._entityRepository.save(nuevo);
  }
  async crearVarios(nuevo: Entidad[]): Promise<Entidad[]> {
    // const datos =
    return this._entityRepository.save(nuevo);
  }

  editar(id: number, registroEditadp: Entidad): Promise<UpdateResult> {
    return this._entityRepository.update(id, registroEditadp);
  }

  eliminar(id: number) {
    return this._entityRepository.delete(id);
  }
  buscarPorParametros(
    criterioBusqueda: FindManyOptions<Entidad>,
  ): Promise<[Entidad[], number]> {
    return this._entityRepository.findAndCount(criterioBusqueda);
  }
  buscarSelect() {}
  async listar(nSkip: number, nTake: number) {
    // return this._aulaRepository.find();
    const manager = await this._entityRepository;
    return manager
      .createQueryBuilder('entidad')
      .orderBy('id', 'DESC')
      .skip(nSkip)
      .take(nTake)
      .getManyAndCount();
  }

  async buscarPorId(
    id: number,
    nSkip: number,
    nTake: number,
  ): Promise<[Entidad[], number]> {
    // return this._aulaRepository.findOne(id);
    const manager = await this._entityRepository;
    return manager
      .createQueryBuilder('aula')
      .where('aula.id =:dato', { dato: id })
      .orderBy('id', 'DESC')
      .skip(nSkip)
      .take(nTake)
      .getManyAndCount();
  }
}

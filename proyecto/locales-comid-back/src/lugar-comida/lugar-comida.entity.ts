import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ESPACIO_LUGAR, TIPO_LUGAR } from '../constantes/enums';
import { LugarEntity } from '../lugar/lugar.entity';
import { ReservaEntity } from '../reserva/reserva.entity';
import { ReservaPorClienteEntity } from '../reserva-por-cliente/reserva-por-cliente.entity';
import { ContactoLugarComidaEntity } from '../contacto-lugar-comida/contacto-lugar-comida.entity';
import { EmpleadoPorLugarComidaEntity } from '../empleado-por-lugar-comida/empleado-por-lugar-comida.entity';
import { MenuPorCategoriaEntity } from '../menu-por-categoria/menu-por-categoria.entity';
import { HorarioAtencionEntity } from '../horario-atencion/horario-atencion.entity';

@Entity('lugar-comida')
export class LugarComidaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // nomre direccion espacio reserva tipo
  @Column({
    name: 'nombre',
    type: 'varchar',
  })
  nombre: string = null;

  @Column({
    name: 'direccion',
    type: 'varchar',
    length: 80,
  })
  direccion: string = null;

  @Column({
    name: 'reserva',
    type: 'tinyint',
  })
  reserva: boolean;

  @Column({
    name: 'espacio',
    type: 'varchar',
  })
  espacio: ESPACIO_LUGAR;

  @Column({
    name: 'tipo',
    type: 'varchar',
  })
  tipo: TIPO_LUGAR;

  @ManyToOne(type => LugarEntity, lugar => lugar.lugaresComida)
  lugar: number | LugarEntity;

  @OneToMany(type => ReservaEntity, reserva => reserva.lugarComida)
  reservas: ReservaEntity[];

  @OneToMany(
    type => ReservaPorClienteEntity,
    reservaCliente => reservaCliente.lugarComida,
  )
  reservasPorCliente: ReservaPorClienteEntity[];

  @OneToMany(
    type => ContactoLugarComidaEntity,
    contactoLugarComida => contactoLugarComida.lugarComida,
  )
  contactosLugarComida: ContactoLugarComidaEntity[];

  @OneToMany(
    type => HorarioAtencionEntity,
    horarioAtencion => horarioAtencion.lugarComida,
  )
  horariosAtencion: HorarioAtencionEntity[];

  @OneToMany(
    type => MenuPorCategoriaEntity,
    menuCategoria => menuCategoria.lugarComida,
  )
  menusPorCategoria: MenuPorCategoriaEntity[];

  @OneToMany(
    type => EmpleadoPorLugarComidaEntity,
    empleadoLugarComida => empleadoLugarComida.lugarComida,
  )
  empleadosPorLugarComida: EmpleadoPorLugarComidaEntity[];
}

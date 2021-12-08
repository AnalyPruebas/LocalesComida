import { RolEntity } from '../rol/rol.entity';
import { RolPorUsuarioEntity } from '../rol-por-usuario/rol-por-usuario.entity';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { CreditoEntity } from '../credito/credito.entity';
import { HistorialCreditoEntity } from '../historial-credito/historial-credito.entity';
import { HistorialPedidoEntity } from '../historial-pedido/historial-pedido.entity';
import { PedidoEntity } from '../pedido/pedido.entity';
import { ReservaPorClienteEntity } from '../reserva-por-cliente/reserva-por-cliente.entity';
import { ReservaEntity } from '../reserva/reserva.entity';
import { HorarioAtencionEntity } from '../horario-atencion/horario-atencion.entity';
import { LugarComidaEntity } from '../lugar-comida/lugar-comida.entity';
import { ContactoLugarComidaEntity } from '../contacto-lugar-comida/contacto-lugar-comida.entity';
import { MenuPorCategoriaEntity } from '../menu-por-categoria/menu-por-categoria.entity';
import { CategoriaEntity } from '../categoria/categoria.entity';
import { MenuEntity } from '../menu/menu.entity';
import { ProductoPorProveedorParaMenuEntity } from '../producto-por-proveedor-para-menu/producto-por-proveedor-para-menu.entity';
import { ProductoEntity } from '../producto/producto.entity';
import { ProveedorEntity } from '../proveedor/proveedor.entity';
import { EmpleadoPorLugarComidaEntity } from '../empleado-por-lugar-comida/empleado-por-lugar-comida.entity';
import { EmpleadoEntity } from '../empleado/empleado.entity';
import { LugarEntity } from '../lugar/lugar.entity';

export const ENTITIES = [
  RolEntity,
  UsuarioEntity,
  RolPorUsuarioEntity,
  LugarEntity,
  MenuEntity,
  CreditoEntity,
  HistorialCreditoEntity,
  HistorialPedidoEntity,
  PedidoEntity,
  ReservaPorClienteEntity,
  ReservaEntity,
  HorarioAtencionEntity,
  ContactoLugarComidaEntity,
  LugarComidaEntity,
  MenuPorCategoriaEntity,
  CategoriaEntity,

  ProductoPorProveedorParaMenuEntity,
  ProductoEntity,
  ProveedorEntity,
  EmpleadoPorLugarComidaEntity,
  EmpleadoEntity,
];

import { RolModule } from '../rol/rol.module';
import { RolPorUsuarioModule } from '../rol-por-usuario/rol-por-usuario.module';
import { HistorialPedidoModule } from '../historial-pedido/historial-pedido.module';
import { HistorialCreditoModule } from '../historial-credito/historial-credito.module';
import { CreditoModule } from '../credito/credito.module';
import { UsuarioModule } from '../usuario/usuario.module';
import { PedidoModule } from '../pedido/pedido.module';
import { ReservaPorClienteModule } from '../reserva-por-cliente/reserva-por-cliente.module';
import { ReservaModule } from '../reserva/reserva.module';
import { HorarioAtencionModule } from '../horario-atencion/horario-atencion.module';
import { ContactoLugarComidaModule } from '../contacto-lugar-comida/contacto-lugar-comida.module';
import { LugarComidaModule } from '../lugar-comida/lugar-comida.module';
import { MenuPorCategoriaModule } from '../menu-por-categoria/menu-por-categoria.module';
import { ProductoPorProveedorParaMenuModule } from '../producto-por-proveedor-para-menu/producto-por-proveedor-para-menu.module';
import { EmpleadoPorLugarComidaModule } from '../empleado-por-lugar-comida/empleado-por-lugar-comida.module';
import { ProveedorModule } from '../proveedor/proveedor.module';
import { ProductoModule } from '../producto/producto.module';
import { MenuModule } from '../menu/menu.module';
import { CategoriaModule } from '../categoria/categoria.module';
import { EmpleadoModule } from '../empleado/empleado.module';
import { LugarModule } from '../lugar/lugar.module';
import { ProductoWsGateway } from '../websocket/producto-ws.gateway';

export const MODULOS = [
  RolModule,
  UsuarioModule,
  RolPorUsuarioModule,
  MenuModule,
  LugarModule,
  CreditoModule,
  HistorialCreditoModule,
  HistorialPedidoModule,
  PedidoModule,
  ReservaPorClienteModule,
  ReservaModule,
  HorarioAtencionModule,
  ContactoLugarComidaModule,
  LugarComidaModule,
  MenuPorCategoriaModule,
  CategoriaModule,

  ProductoPorProveedorParaMenuModule,
  ProductoModule,
  ProveedorModule,
  EmpleadoPorLugarComidaModule,
  EmpleadoModule,
  ProductoWsGateway,
];

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MODULOS } from './constantes/lista-modulos';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CONFIGURACIONES } from './constantes/configuraciones';
import { ENTITIES } from './constantes/lista-entities';
import { crearDatos } from './funciones/cargar-datos';
import { RolService } from './rol/rol.service';
import { UsuarioService } from './usuario/usuario.service';
import { RolPorUsuarioService } from './rol-por-usuario/rol-por-usuario.service';
import { CreditoService } from './credito/credito.service';
import { HistorialCreditoService } from './historial-credito/historial-credito.service';
import { HistorialPedidoService } from './historial-pedido/historial-pedido.service';
import { PedidoService } from './pedido/pedido.service';
import { ReservaPorClienteService } from './reserva-por-cliente/reserva-por-cliente.service';
import { ReservaService } from './reserva/reserva.service';
import { HorarioAtencionService } from './horario-atencion/horario-atencion.service';
import { ContactoLugarComidaService } from './contacto-lugar-comida/contacto-lugar-comida.service';
import { LugarComidaService } from './lugar-comida/lugar-comida.service';
import { MenuPorCategoriaService } from './menu-por-categoria/menu-por-categoria.service';
import { CategoriaService } from './categoria/categoria.service';
import { MenuService } from './menu/menu.service';
import { ProductoPorProveedorParaMenuService } from './producto-por-proveedor-para-menu/producto-por-proveedor-para-menu.service';
import { ProductoService } from './producto/producto.service';
import { ProveedorService } from './proveedor/proveedor.service';
import { EmpleadoPorLugarComidaService } from './empleado-por-lugar-comida/empleado-por-lugar-comida.service';
import { EmpleadoService } from './empleado/empleado.service';
import { LugarService } from './lugar/lugar.service';
// import * as a from '../src/datos/'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: CONFIGURACIONES.bdd.host,
      port: CONFIGURACIONES.bdd.port,
      name: CONFIGURACIONES.bdd.name,
      connectTimeout: 20000,
      username: CONFIGURACIONES.bdd.username,
      password: CONFIGURACIONES.bdd.password,
      database: CONFIGURACIONES.bdd.database,
      entities: [...ENTITIES],
      synchronize: CONFIGURACIONES.bdd.synchronize,
      dropSchema: CONFIGURACIONES.bdd.dropSchema,
    }),
    ...MODULOS,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(
    private readonly _rolService: RolService,
    private readonly _usuarioService: UsuarioService,
    private readonly _rolPorUsuarioService: RolPorUsuarioService,
    private readonly _creditoService: CreditoService,
    private readonly _hitorialCreditoService: HistorialCreditoService,
    private readonly _historialPedidoService: HistorialPedidoService,
    private readonly _pedidoService: PedidoService,
    private readonly _reservaPorClienteService: ReservaPorClienteService,
    private readonly _reservaService: ReservaService,
    private readonly _horarioAtencionService: HorarioAtencionService,
    private readonly _contactoLugarComidaService: ContactoLugarComidaService,
    private readonly _lugarComidaService: LugarComidaService,
    private readonly _menuPorCategoriaService: MenuPorCategoriaService,
    private readonly _categoriaService: CategoriaService,
    private readonly _menuService: MenuService,
    private readonly _productoPorProveedorParaMenuService: ProductoPorProveedorParaMenuService,
    private readonly _productoService: ProductoService,
    private readonly _proveedorService: ProveedorService,
    private readonly _empleadoPorLugarComida: EmpleadoPorLugarComidaService,
    private readonly _empleadoService: EmpleadoService,
    private readonly _lugar: LugarService,
  ) {
    // tslint:disable-next-line:no-console
    CONFIGURACIONES.datosPrueba ? this.insertar() : console.info('SIN DP');
  }

  async insertar() {
    try {
      const rol = await crearDatos(
        '/home/dev-03/Documents/otheressss/chinacalle-analy/locales-comid-back/src/datos/datos-rol.json',
        this._rolService,
      );
      const usuario = await crearDatos(
        '/home/dev-03/Documents/otheressss/chinacalle-analy/locales-comid-back/src/datos/datos-usuario.json',
        this._usuarioService,
      );
      const rolPorUsuario = await crearDatos(
        '/home/dev-03/Documents/otheressss/chinacalle-analy/locales-comid-back/src/datos/datos-rol-por-usuario.json',
        this._rolPorUsuarioService,
      );

      const lugar = await crearDatos(
        '/home/dev-03/Documents/otheressss/chinacalle-analy/locales-comid-back/src/datos/datos-lugar.json',
        this._lugar,
      );
      const menu = await crearDatos(
        '/home/dev-03/Documents/otheressss/chinacalle-analy/locales-comid-back/src/datos/datos-menu.json',
        this._menuService,
      );

      const categoria = await crearDatos(
        '/home/dev-03/Documents/otheressss/chinacalle-analy/locales-comid-back/src/datos/datos-categoria.json',
        this._categoriaService,
      );
      const lugarComida = await crearDatos(
        '/home/dev-03/Documents/otheressss/chinacalle-analy/locales-comid-back/src/datos/datos-lugar-comida.json',
        this._lugarComidaService,
      );
      const empleado = await crearDatos(
        '/home/dev-03/Documents/otheressss/chinacalle-analy/locales-comid-back/src/datos/datos-empleado.json',
        this._empleadoService,
      );
      const horarioAtencion = await crearDatos(
        '/home/dev-03/Documents/otheressss/chinacalle-analy/locales-comid-back/src/datos/datos-horario-atencion.json',
        this._horarioAtencionService,
      );
      const contactoLugarComida = await crearDatos(
        '/home/dev-03/Documents/otheressss/chinacalle-analy/locales-comid-back/src/datos/datos-contacto-lugar-comida.json',
        this._contactoLugarComidaService,
      );

      const menuPorCategoria = await crearDatos(
        '/home/dev-03/Documents/otheressss/chinacalle-analy/locales-comid-back/src/datos/datos-menu-por-categoria.json',
        this._menuPorCategoriaService,
      );
      const proveedor = await crearDatos(
        '/home/dev-03/Documents/otheressss/chinacalle-analy/locales-comid-back/src/datos/datos-proveedor.json',
        this._proveedorService,
      );
      const producto = await crearDatos(
        '/home/dev-03/Documents/otheressss/chinacalle-analy/locales-comid-back/src/datos/datos-productos.json',
        this._productoService,
      );
      const productoParaMenu = await crearDatos(
        '/home/dev-03/Documents/otheressss/chinacalle-analy/locales-comid-back/src/datos/productos-por-proveedor-para-menu.json',
        this._productoPorProveedorParaMenuService,
      );
      const empleadoPorLugarComida = await crearDatos(
        '/home/dev-03/Documents/otheressss/chinacalle-analy/locales-comid-back/src/datos/datos-empleado-lugar-comida.json',
        this._empleadoPorLugarComida,
      );
      console.log('rol', rol);
      console.log('usuario', usuario);
      console.log('rol-usuario', rolPorUsuario);
      console.log('lugar', lugar);
      console.log('menu', menu);
      console.log('categoria', categoria);
      console.log('lugarComida', lugarComida);
      console.log('emple', empleado);
      console.log('horarioA', horarioAtencion);
      console.log('contac', contactoLugarComida);
      console.log('empleaLugaCom', empleadoPorLugarComida);
    } catch (error) {
      console.error('datos no creados ', error);
    }
  }
}

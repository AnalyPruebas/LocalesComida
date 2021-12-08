import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  CarritoInterface,
  MenuInterface,
} from '../../../menu-por-categoria/interfaces/carrito.interface';
import {SelectItem} from 'primeng/api';
import {of} from 'rxjs';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {CarritoService} from '../../servicios/carrito.service';
import * as io from 'socket.io-client';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.sass']
})
export class ComprarComponent implements OnInit {
  take = 5;
  parametrosUrl;
  idLocalComida;
  carrito: CarritoInterface = {cliente: '', menus: []};
  @Output() pedidoCarrito: EventEmitter<any> = new EventEmitter<object | boolean>();
  @Input() arreglo: any = [];
  menuSeleccionado;
  displayDialog: boolean;
  productosMenu;
  socket;
  arregloSocket;

  opcionesOrdenamiento: SelectItem[] = [
    {label: 'Precios bajos', value: '!precioUnitario'},
    {label: 'Precios altos', value: 'precioUnitario'},
    {label: 'Nombre', value: 'nombre'},
    // {label: 'Brand', value: 'brand'}
  ];

  sortKey: string;

  sortField: string;

  ordenarDeForma: number;

  constructor(
    private readonly _carritoService: CarritoService,
    private readonly _activatedRoute: ActivatedRoute,
  ) {
    this.socket = io(environment.urlSocket);
  }
  ngOnInit() {
    const parametros$ = of(this._activatedRoute);
    parametros$.pipe(
      map(
        (parametros: any) => {
          const queryParams = parametros.queryParams.value;
          const routeParams = parametros.params.value;

          return ({queryParams, routeParams});
        }
      )
    ).subscribe(
      (parametros) => {
        this.parametrosUrl = {
          queryParams: {
            where: parametros.queryParams.where ? JSON.parse(parametros.queryParams.where) : {},
            skip: parametros.queryParams.skip ? +parametros.queryParams.skip : 0
          },
          routeParams: parametros.routeParams
        };
        this.idLocalComida = this.parametrosUrl.routeParams.idLocal;
        console.log('on init',  (this.parametrosUrl));
      }
    );

    this.socket.on('front', (datos) => {
      console.log('datosSocket', datos);
      this.arregloSocket = datos;
    });
    this.listarProductos();
  }
  listarProductos() {
    const consulta = {
      relations: ['categoria', 'menu', 'productosPorProveedorParaMenu', 'productosPorProveedorParaMenu.producto'],
      where: {lugarComida: this.idLocalComida},
      skip: this.parametrosUrl.queryParams.skip,
      take: this.take,
      order: {
        id: 'DESC',
      },
    };
    this._carritoService.buscarParametros(JSON.stringify(consulta))
      .subscribe(
        (res: any) => {
          console.info('respuesta', res);
          this.arreglo = res[0];
          if (this.arregloSocket !== undefined) {
            // logica sockets y ver en donde mas
          }
        },
        error => {
          console.error(error);
        }
      );
  }

  selectCar(event: Event, car) {
    this.menuSeleccionado = car;
    this.productosMenu = this.menuSeleccionado.productosPorProveedorParaMenu;
    this.displayDialog = true;
    event.preventDefault();
  }

  onSortChange(event) {
    const criterio = event.value;

    if (criterio.indexOf('!') === 0) {
      this.ordenarDeForma = 1;
      this.sortField = criterio.substring(1, criterio.length);
    } else {
      this.ordenarDeForma = -1;
      this.sortField = criterio;
    }
  }

  onDialogHide() {
    this.menuSeleccionado = null;
  }

  sumarRestar(event: Event, menu: MenuInterface, tipo: string) {
    console.log('menu', menu);
    // console.log('evento', event);
    const tieneIndice = this.carrito.menus.includes(menu);
    if (tieneIndice) {
      console.log('tiene indice');
      const indice = this.carrito.menus.indexOf(menu);
      if (tipo === 'restar') {
        if (this.carrito.menus[indice].nCantidad > 1) {
          this.carrito.menus[indice].nCantidad -= 1;
          this.carrito.menus[indice].precioTotal -= Number(menu.precioUnitario);
        } else {
          delete this.carrito.menus[indice];
        }
      } else {
        this.carrito.menus[indice].nCantidad += 1;
        this.carrito.menus[indice].precioTotal += Number(menu.precioUnitario);
      }
    } else {
      console.log('no tiene indice');
      if (tipo === 'sumar') {
        menu.precioUnitario = Number(menu.precioUnitario);
        menu.nCantidad = 1;
        menu.precioTotal = +menu.precioUnitario;
        this.carrito.menus.push(menu);
      }
    }
    console.log('carrito', this.carrito);
  }

  finalizar() {
    this.pedidoCarrito.emit(this.carrito);
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CarritoInterface, MenuInterface} from '../../../menu-por-categoria/interfaces/carrito.interface';
import {SelectItem} from 'primeng/api';
import {CarritoService} from '../../servicios/carrito.service';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {map} from 'rxjs/operators';
import {PedidoInterface} from '../../../../interfaces/pedido.interface';
import * as io from 'socket.io-client';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-finalizar',
  templateUrl: './finalizar.component.html',
  styleUrls: ['./finalizar.component.sass']
})
export class FinalizarComponent implements OnInit {

  parametrosUrl;
  idLocalComida;
  @Input() arreglo;
  arregloCarrito: any;
  menuSeleccionado;
  displayDialog: boolean;
  productosMenu;
  pedidos: PedidoInterface[] = [];
  socket;

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
    this.listarProductos();
  }
  listarProductos() {
    this.arregloCarrito = this.arreglo.menus;
  }

  menuSeleccionadoFuncion(event: Event, car) {
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

  comprar() {
    let pedido;
    this.arreglo.menus.forEach((valor, indice) => {
      pedido = {
        cantidad: valor.nCantidad,
        precioTotal: valor.precioTotal,
        menuCategoria: valor.id,
      };
      console.log('pedido', pedido);
      this.pedidos.push(pedido);
    } );
    this._carritoService.pedido(this.pedidos).subscribe(
      res => {
        console.info('res', res);
        this.actualizarStock(this.arreglo.menus);
      }, error => {
        console.error('error', error);
      }
    );
    // this._carritoService.updateproducto()
  }
  actualizarStock(carrito) {
    this.socket.emit('producto', carrito, (res) => {
      console.log(res);
    });
  }
}

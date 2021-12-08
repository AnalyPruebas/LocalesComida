import {Component, EventEmitter, Input, Output} from '@angular/core';
import { MenuPorCategoriaService } from '../../servicios/menu-por-categoria.service';
import {SelectItem} from 'primeng/api';
import {CarritoInterface, MenuInterface, ProductoInterface} from '../../interfaces/carrito.interface';

@Component({
    selector: 'app-carrito-menu-por-categoria',
    templateUrl: './carrito-menu-por-categoria.component.html',
    styleUrls: ['./carrito-menu-por-categoria.component.sass'],
})
export class CarritoMenuPorCategoria {

  carrito: CarritoInterface = {cliente: '', menus: []};
  @Output() pedidoCarrito: EventEmitter<any> = new EventEmitter<object | boolean>();
  @Input() arreglo = [];
  selectedCar;
  displayDialog: boolean;

  sortOptions: SelectItem[] = [
    {label: 'Precios bajos', value: '!precioUnitario'},
    {label: 'Precios altos', value: 'precioUnitario'},
    {label: 'Nombre', value: 'nombre'},
    // {label: 'Brand', value: 'brand'}
  ];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  constructor(
    private readonly _menuPorCategoriaService: MenuPorCategoriaService,
  ) {
    this.listarLugares();
  }

  listarLugares() {
    this._menuPorCategoriaService.obtenerCarrito(0, 3)
      .subscribe(
        (res: any) => {
          console.info('respuesta', res);
          // this.carrito = res[0];
          // this.carrito = res[1];
          this.arreglo = res[0];
        },
        error => {
          console.error(error)
        }
      );
  }

  selectCar(event: Event, car) {
    this.selectedCar = car;
    this.displayDialog = true;
    event.preventDefault();
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  onDialogHide() {
    this.selectedCar = null;
  }

  sumar(event: Event, menus: MenuInterface) {
    const tieneIndice = this.carrito.menus.includes(menus);
    if (tieneIndice) {
      const indice = this.carrito.menus.indexOf(menus);
      this.carrito.menus[indice].nCantidad += 1;
      this.carrito.menus[indice].precioTotal += menus.precioUnitario;
    } else {
      menus.nCantidad = 1;
      menus.precioTotal = menus.precioUnitario;
      this.carrito.menus.push(menus);
    }
  }

  restar(event: Event, menus: MenuInterface) {
    const tieneIndice = this.carrito.menus.includes(menus);
    if (tieneIndice) {
      const indice = this.carrito.menus.indexOf(menus);
      if (this.carrito.menus[indice].nCantidad > 1) {
        this.carrito.menus[indice].nCantidad -= 1;
        this.carrito.menus[indice].precioTotal -= menus.precioUnitario;
      } else {
        delete this.carrito.menus[indice];
      }
    }
  }

  finalizar() {
    this.pedidoCarrito.emit(this.carrito);
  }
}

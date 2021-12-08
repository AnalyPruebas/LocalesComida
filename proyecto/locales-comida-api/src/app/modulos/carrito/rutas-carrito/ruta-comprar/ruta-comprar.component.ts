import { Component, OnInit } from '@angular/core';
import {CarritoService} from '../../servicios/carrito.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ruta-comprar',
  templateUrl: './ruta-comprar.component.html',
  styleUrls: ['./ruta-comprar.component.sass']
})
export class RutaComprarComponent implements OnInit {

  carrito;
  constructor(
    private readonly _carritoService: CarritoService,
    private readonly _router: Router,
  ) { }

  ngOnInit() {
  }

  pedidoCarrito(eventoCarrito: any) {
    this.carrito = eventoCarrito.menus.length > 0 ? eventoCarrito : undefined;
    console.log('ruta co', eventoCarrito);
  }
}

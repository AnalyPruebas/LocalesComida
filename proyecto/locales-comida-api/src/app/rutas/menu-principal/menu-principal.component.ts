import { Component, OnInit } from '@angular/core';
import {ARREGLO_MENU_PRINCIPAL} from '../../constantes/arreglos';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.sass']
})
export class MenuPrincipalComponent implements OnInit {
  menuPrincipal = ARREGLO_MENU_PRINCIPAL;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
  ) {}

  ngOnInit() {
  }

  rutaA(item) {
    const url = ['menu'];
    /*const parametros = {
      queryParams: {
        nombre: item.usuario,
      }
    };*/
  }
}

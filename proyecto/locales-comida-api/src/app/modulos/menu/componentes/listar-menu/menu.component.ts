import { Component, OnInit } from '@angular/core';
import { ComponenteGenerico } from 'src/app/constantes/claase-generica-component';
import { MenuService } from '../../servicios/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent extends ComponenteGenerico {

  cols = [
    {field: 'nombre', 'header': 'nombre'},
    {field: 'id', 'header': 'acciones'},
  ];
  constructor(
    private readonly _menuService: MenuService,
  ) { 
    super(_menuService);
  }

}

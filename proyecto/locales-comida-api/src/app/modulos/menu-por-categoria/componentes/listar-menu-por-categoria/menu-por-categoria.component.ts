import { Component, OnInit } from '@angular/core';
import { ComponenteGenerico } from 'src/app/constantes/claase-generica-component';
import { MenuPorCategoriaService } from '../../servicios/menu-por-categoria.service';

@Component({
  selector: 'app-menu-por-categoria',
  templateUrl: './menu-por-categoria.component.html',
  styleUrls: ['./menu-por-categoria.component.sass']
})
export class MenuPorCategoriaComponent extends ComponenteGenerico{

  constructor(
    private readonly _menuPorCategoriaService: MenuPorCategoriaService,
  ) {
    super(_menuPorCategoriaService);
  }

}

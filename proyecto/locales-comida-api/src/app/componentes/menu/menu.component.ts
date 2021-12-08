import {Component, Input, OnInit} from '@angular/core';
import {ARREGLO_MENU_PRINCIPAL} from '../../constantes/arreglos';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  @Input() menu;
  constructor() { }

  ngOnInit() {
  }

}

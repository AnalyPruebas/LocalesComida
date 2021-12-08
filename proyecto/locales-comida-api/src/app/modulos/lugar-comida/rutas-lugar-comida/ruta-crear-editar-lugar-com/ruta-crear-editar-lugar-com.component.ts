import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LugarComidaService} from '../../servicios/lugar-comida.servicio';

@Component({
  selector: 'app-ruta-crear-editar-lugar-com',
  templateUrl: './ruta-crear-editar-lugar-com.component.html',
  styleUrls: ['./ruta-crear-editar-lugar-com.component.sass']
})
export class RutaCrearEditarLugarComComponent implements OnInit {
  lugarComida;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _lugarComidaService: LugarComidaService,
  ) {}

  ngOnInit() {
    this._activatedRoute.params.subscribe(
      value => {},
      error => {
        console.error(error);
      }
    );
  }
  crearLugarComida(lugarEvento: any) {
    this.lugarComida = lugarEvento ? lugarEvento : undefined;
    this._lugarComidaService.guardar(this.lugarComida);
  }
  guardar() {
    console.info('guardado');
  }

}

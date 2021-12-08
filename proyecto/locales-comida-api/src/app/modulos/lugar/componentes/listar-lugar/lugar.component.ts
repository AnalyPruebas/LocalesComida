import {Component, Input, OnInit} from '@angular/core';
import { LugarService } from '../../servicios/lugar.service';

@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.sass']
})
export class LugarComponent implements OnInit {

  @Input() arregloLugares = [];
  cols = [
    {field: 'nombre', header: 'nombre'},
    {field: 'id', header: 'acciones'},
  ];
  registrosTotales: number;

  constructor(
    private readonly _lugarService: LugarService,
    // private readonly _dialog: MatDial
  ) { }

  ngOnInit() {
    this.listarLugares();
  }
  cargarMasDatos(evento) {
    console.log('evento paginacion', evento);
    this._lugarService.obtenerTodos(evento.first,3)
      .subscribe(
        (res: any) => {
          this.arregloLugares = res[0];
        },
        error => {
          console.error(error)
        }
      );
  }
  listarLugares() {
    this._lugarService.obtenerTodos(0,3)
      .subscribe(
        (res: any) => {
          // console.info('respuesta', res);
          this.arregloLugares = res[0];
          this.registrosTotales = res[1];
        },
        error => {
          console.error(error)
        }
      );
  }

  cambiarEstado(ciudad) {
    const idCiudad = ciudad.id as number;
    const nuevoEstado = !ciudad.habilitado;
    // console.log('nuevo', nuevoEstado);
    const ciudadActualizar = {
      habilitado: nuevoEstado
    };
    this._lugarService.update(idCiudad, ciudadActualizar)
      .subscribe(
        respuestaActualizar => {
          // console.log('todo bien', respuestaActualizar);
          // this.listarCiudades();
          ciudad.habilitado = nuevoEstado;
          this.listarLugares();
        },
        error => {
          console.error('error del servidor', error)
        }
      );
  }



}
